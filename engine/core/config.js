/**
 * Engine Core Configuration
 * Centralized settings for gameplay mechanics, balance, and file paths.
 */
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '..', '..');

const Config = {
  paths: {
    baseDir: BASE_DIR,
    poolsDir: path.join(BASE_DIR, 'phase-4-pools'),
    missionsDir: path.join(BASE_DIR, 'missions'),
    dataDir: path.join(BASE_DIR, 'data'),
    defaultProgressFile: path.join(BASE_DIR, 'data', 'player_progress.json')
  },

  gameplay: {
    player: {
      initialHp: 100,
      maxHp: 100,
      baseLevel: 12,
      initialGold: 100
    },
    battle: {
      baseDamage: 100,
      comboMultiplierStep: 0.1, // +10% per consecutive correct answer
      maxComboMultiplier: 2.0,
      wrongPenaltyHp: 15
    },
    cooldowns: {
      defaultSessionCooldown: 3,
      wrongAnswerCooldown: 1
    },
    learning: {
      masteryThresholds: {
        remedial: 0.60,    // Below 60%: needs remediation
        proficient: 0.75,  // 75%+: solid understanding
        mastered: 0.90     // 90%+: fully mastered
      },
      masteryWeights: {
        easy: 0.10,
        medium: 0.15,
        hard: 0.25
      },
      decayFactor: 0.05
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Config;
} else if (typeof window !== 'undefined') {
  window.RPG_Config = Config;
}
