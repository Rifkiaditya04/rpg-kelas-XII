/**
 * Damage Resolver
 * Computes damage dealt to enemies on correct answers (with combo bonuses)
 * and penalties dealt to players on incorrect answers.
 */
const Config = require('../core/config');

class DamageResolver {
  /**
   * Calculate damage dealt to enemy
   * @param {Object} params
   * @param {Object} params.question - question item
   * @param {number} params.combo - current combo streak (>= 1)
   * @returns {number}
   */
  static calculateEnemyDamage({ question, combo = 1 }) {
    const baseDamage = question?.gameplay?.correct_damage || Config.gameplay.battle.baseDamage;
    const step = Config.gameplay.battle.comboMultiplierStep;
    const maxMultiplier = Config.gameplay.battle.maxComboMultiplier;

    const multiplier = Math.min(maxMultiplier, 1 + Math.max(0, (combo - 1) * step));
    return Math.round(baseDamage * multiplier);
  }

  /**
   * Calculate damage inflicted on player by wrong answer
   * @param {Object} params
   * @param {Object} params.question
   * @returns {number}
   */
  static calculatePlayerPenalty({ question }) {
    return question?.gameplay?.wrong_penalty || Config.gameplay.battle.wrongPenaltyHp;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DamageResolver };
} else if (typeof window !== 'undefined') {
  window.RPG_DamageResolver = { DamageResolver };
}
