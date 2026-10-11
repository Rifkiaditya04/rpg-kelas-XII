/**
 * Progress Store
 * Central manager for mutating and persisting player state after session completion.
 */
const { CooldownManager } = require('../learning/cooldownManager');
const { MasteryCalculator } = require('../learning/masteryCalculator');
const { AchievementManager } = require('./achievementManager');
const { RewardResolver } = require('../battle/rewardResolver');

class ProgressStore {
  constructor(repository, eventBus = null) {
    this.repository = repository;
    this.eventBus = eventBus;
  }

  /**
   * Process and commit session results into persistent player state
   * @param {Object} session 
   * @param {Object} currentPersistent 
   * @returns {Object} updated persistent state
   */
  commitSession(session, currentPersistent) {
    const updated = {
      ...currentPersistent,
      mastery: { ...(currentPersistent.mastery || {}) },
      cooldowns: { ...(currentPersistent.cooldowns || {}) },
      achievements: [...(currentPersistent.achievements || [])],
      completed_missions: [...(currentPersistent.completed_missions || [])]
    };

    // 1. Decrement existing cooldowns from past sessions
    updated.cooldowns = CooldownManager.decrementCooldowns(updated.cooldowns);

    // 2. Register cooldowns for questions answered in this session
    for (const ans of session.answers_log) {
      updated.cooldowns = CooldownManager.registerCooldown(
        ans.question_id,
        ans.is_correct,
        updated.cooldowns
      );
    }

    // 3. Update Mastery via EWMA
    const previousMastery = { ...updated.mastery };
    updated.mastery = MasteryCalculator.updateFromSession(updated.mastery, session.answers_log);

    if (this.eventBus) {
      this.eventBus.emit('mastery:updated', {
        before: previousMastery,
        after: updated.mastery
      });
    }

    // 4. Credit XP and Gold (including mission clear bonus)
    const missionBonus = RewardResolver.resolveMissionClearBonus(session);
    const sessionXp = session.total_xp_gained + missionBonus.bonusXp;
    const sessionGold = missionBonus.bonusGold;

    updated.xp += sessionXp;
    updated.gold += sessionGold;

    // Check level progression (every 500 XP = 1 level)
    const newLevel = 12 + Math.floor(updated.xp / 500);
    if (newLevel > updated.level) {
      updated.level = newLevel;
      if (this.eventBus) {
        this.eventBus.emit('player:leveled_up', { level: newLevel });
      }
    }

    // 5. Track completed missions
    if (session.battle_status === 'VICTORY' && !updated.completed_missions.includes(session.mission_id)) {
      updated.completed_missions.push(session.mission_id);
    }

    // 6. Check & Award Achievements
    const newAchievements = AchievementManager.evaluateAchievements(session, updated);
    for (const ach of newAchievements) {
      updated.achievements.push(ach.id);
      if (this.eventBus) {
        this.eventBus.emit('achievement:unlocked', ach);
      }
    }

    // 7. Persist to storage
    if (this.repository) {
      this.repository.save(updated);
    }

    if (this.eventBus) {
      this.eventBus.emit('progress:saved', updated);
    }

    return updated;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProgressStore };
} else if (typeof window !== 'undefined') {
  window.RPG_ProgressStore = { ProgressStore };
}
