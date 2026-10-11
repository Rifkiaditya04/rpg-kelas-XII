/**
 * Cooldown Manager
 * Manages session cooldowns for questions to avoid premature question repeat,
 * while allowing sooner retries for incorrect answers.
 */
const Config = require('../core/config');

class CooldownManager {
  /**
   * Check if a question is available to be selected (not on cooldown)
   * @param {string} questionId 
   * @param {Object} cooldowns - { [questionId]: remainingSessions }
   * @returns {boolean}
   */
  static isAvailable(questionId, cooldowns = {}) {
    if (!cooldowns) return true;
    const remaining = cooldowns[questionId];
    return !remaining || remaining <= 0;
  }

  /**
   * Register a question into cooldown
   * @param {string} questionId 
   * @param {boolean} wasCorrect 
   * @param {Object} cooldowns - existing cooldown map
   * @param {Object} customRules - optional custom session cooldown values
   * @returns {Object} updated cooldown map
   */
  static registerCooldown(questionId, wasCorrect, cooldowns = {}, customRules = {}) {
    const updated = { ...cooldowns };
    const defaultSessions = customRules.cooldown_sessions ?? Config.gameplay.cooldowns.defaultSessionCooldown;
    const wrongSessions = customRules.wrong_answer_cooldown_sessions ?? Config.gameplay.cooldowns.wrongAnswerCooldown;

    updated[questionId] = wasCorrect ? defaultSessions : wrongSessions;
    return updated;
  }

  /**
   * Decrement all active cooldowns at the end of a session
   * @param {Object} cooldowns 
   * @returns {Object} cleaned cooldown map with expired entries removed
   */
  static decrementCooldowns(cooldowns = {}) {
    const updated = {};
    for (const [qId, remaining] of Object.entries(cooldowns || {})) {
      if (typeof remaining === 'number' && remaining > 1) {
        updated[qId] = remaining - 1;
      }
      // If remaining <= 1, it expires and is omitted from the map
    }
    return updated;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CooldownManager };
} else if (typeof window !== 'undefined') {
  window.RPG_CooldownManager = { CooldownManager };
}
