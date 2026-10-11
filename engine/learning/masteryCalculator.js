/**
 * Mastery Calculator
 * Calculates and updates student competency mastery scores using an exponentially
 * weighted smoothing model so mastery evolves steadily without erratic jumps.
 */
const Config = require('../core/config');

class MasteryCalculator {
  /**
   * Update mastery for a single answered question
   * @param {Object} params
   * @param {number} params.currentMastery - current mastery score (0.0 - 1.0) or undefined
   * @param {boolean} params.isCorrect - whether the student answered correctly
   * @param {string} params.difficulty - 'easy', 'medium', 'hard'
   * @returns {number} new mastery score clamped to [0.0, 1.0]
   */
  static updateCompetencyMastery({ currentMastery = 0.5, isCorrect, difficulty = 'medium' }) {
    const alpha = 0.25; // Smoothing factor (0 < alpha <= 1)
    
    // Performance target signal for this question
    let targetSignal;
    if (isCorrect) {
      targetSignal = difficulty === 'hard' ? 1.0 : (difficulty === 'medium' ? 0.9 : 0.8);
    } else {
      targetSignal = difficulty === 'hard' ? 0.35 : (difficulty === 'medium' ? 0.25 : 0.15);
    }

    // Exponentially Weighted Moving Average (EWMA)
    const updated = (1 - alpha) * currentMastery + alpha * targetSignal;
    return Math.max(0.0, Math.min(1.0, Math.round(updated * 1000) / 1000));
  }

  /**
   * Batch update mastery from a completed session answers log
   * @param {Object} currentMasteryMap - { [competencyId]: float }
   * @param {Array} answersLog - [ { competency, is_correct, difficulty }, ... ]
   * @returns {Object} updated mastery map
   */
  static updateFromSession(currentMasteryMap = {}, answersLog = []) {
    const updated = { ...currentMasteryMap };

    for (const record of answersLog) {
      const compId = record.competency;
      if (!compId) continue;

      const current = updated[compId] !== undefined ? updated[compId] : 0.5;
      updated[compId] = MasteryCalculator.updateCompetencyMastery({
        currentMastery: current,
        isCorrect: record.is_correct,
        difficulty: record.difficulty
      });
    }

    return updated;
  }

  /**
   * Categorize mastery score into pedagogical bands
   * @param {number} score 
   * @returns {string} 'remedial' | 'in_progress' | 'proficient' | 'mastered'
   */
  static getMasteryBand(score) {
    const thresholds = Config.gameplay.learning.masteryThresholds;
    if (score < thresholds.remedial) return 'remedial';
    if (score < thresholds.proficient) return 'in_progress';
    if (score < thresholds.mastered) return 'proficient';
    return 'mastered';
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MasteryCalculator };
} else if (typeof window !== 'undefined') {
  window.RPG_MasteryCalculator = { MasteryCalculator };
}
