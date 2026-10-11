/**
 * Remediation Selector
 * Analyzes competency mastery and generates targeted remedial recommendations
 * with high easy/medium ratios and zero hard questions to scaffold struggling learners.
 */
const { MasteryCalculator } = require('./masteryCalculator');

class RemediationSelector {
  /**
   * Scan player mastery and find competencies requiring remedial intervention
   * @param {Object} masteryMap - { [competencyId]: float }
   * @returns {Array} list of competency IDs needing remediation
   */
  static findWeakCompetencies(masteryMap = {}) {
    const weak = [];
    for (const [compId, score] of Object.entries(masteryMap)) {
      if (MasteryCalculator.getMasteryBand(score) === 'remedial') {
        weak.push({ competency_id: compId, score });
      }
    }
    weak.sort((a, b) => a.score - b.score);
    return weak;
  }

  /**
   * Generate an adaptive remedial recipe configuration
   * @param {string} subject 
   * @param {string} competencyId 
   * @returns {Object} remedial recipe template
   */
  static buildRemedialRecipe(subject, competencyId) {
    return {
      mission_id: `REM-${competencyId}-${Date.now().toString().slice(-4)}`,
      mission_name: `Remedial Mandiri: ${competencyId}`,
      mission_type: 'remedial',
      question_count: 4,
      learning_curve_policy: {
        minimum_easy: 2,
        maximum_hard_ratio: 0.0,
        require_warmup: true
      },
      selection_rule: {
        difficulty_distribution: {
          easy: 3,
          medium: 1,
          hard: 0
        },
        competency_weights: [
          { competency_id: competencyId, weight: 1.0 }
        ],
        fallback: {
          if_easy_unavailable: 'use_medium',
          if_medium_unavailable: 'use_easy',
          if_hard_unavailable: 'use_medium',
          if_pool_below_minimum: 'block_mission'
        }
      },
      story: {
        scene: 'Ruang Bimbingan Belajar',
        npc: 'Guru Pendamping',
        enemy: 'Shadow Doubt',
        objective: 'Memperkuat kembali konsep dasar yang belum stabil'
      }
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RemediationSelector };
} else if (typeof window !== 'undefined') {
  window.RPG_RemediationSelector = { RemediationSelector };
}
