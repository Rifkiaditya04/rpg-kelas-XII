/**
 * Reward Resolver
 * Calculates XP and Gold gains from individual answers and end-of-mission performance.
 */
class RewardResolver {
  /**
   * Calculate reward for an answered question
   * @param {Object} question 
   * @param {boolean} isCorrect 
   * @param {number} combo 
   * @returns {Object} { xp, gold }
   */
  static resolveQuestionReward(question, isCorrect, combo = 1) {
    if (!isCorrect) {
      return { xp: 0, gold: 0 };
    }

    const baseXp = question?.gameplay?.base_xp || 10;
    const bonusXp = Math.floor((combo - 1) * 2);
    const goldEarned = 5 + Math.floor(combo * 1.5);

    return {
      xp: baseXp + bonusXp,
      gold: goldEarned
    };
  }

  /**
   * Calculate end of mission bonus
   * @param {Object} session 
   * @returns {Object} { bonusXp, bonusGold, victory }
   */
  static resolveMissionClearBonus(session) {
    const isVictory = session.battle_status === 'VICTORY';
    const accuracy = session.answers_log.length > 0
      ? session.answers_log.filter(a => a.is_correct).length / session.answers_log.length
      : 0;

    let bonusXp = isVictory ? 50 : 15;
    let bonusGold = isVictory ? 30 : 10;

    if (accuracy === 1.0) {
      bonusXp += 50; // Perfect run bonus
      bonusGold += 25;
    }

    return {
      bonusXp,
      bonusGold,
      accuracy,
      isVictory
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RewardResolver };
} else if (typeof window !== 'undefined') {
  window.RPG_RewardResolver = { RewardResolver };
}
