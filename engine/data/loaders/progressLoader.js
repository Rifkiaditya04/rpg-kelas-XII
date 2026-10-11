/**
 * Progress Loader
 * Loads persistent player progress from storage (file on Node.js / localStorage in browser).
 */
const fs = require('fs');
const path = require('path');
const Config = require('../../core/config');

function createDefaultProgress() {
  return {
    player_id: 'PLAYER-001',
    level: 12,
    xp: 0,
    gold: 100,
    mastery: {},      // { [competency_id]: 0.0 - 1.0 }
    cooldowns: {},    // { [question_id]: remaining_sessions }
    achievements: [],
    completed_missions: [],
    last_updated: new Date().toISOString()
  };
}

function loadProgress(customFilePath = null) {
  const filePath = customFilePath || Config.paths.defaultProgressFile;

  // Node environment
  if (typeof fs !== 'undefined' && fs.existsSync && fs.readFileSync) {
    if (!fs.existsSync(filePath)) {
      return createDefaultProgress();
    }
    try {
      const raw = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '').trim();
      const parsed = JSON.parse(raw);
      return {
        ...createDefaultProgress(),
        ...parsed,
        mastery: { ...(parsed.mastery || {}) },
        cooldowns: { ...(parsed.cooldowns || {}) },
        achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
      };
    } catch (err) {
      console.warn(`[ProgressLoader] Corrupted progress file at ${filePath}, using defaults:`, err.message);
      return createDefaultProgress();
    }
  }

  // Browser environment fallback
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem('RPG_PLAYER_PROGRESS');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return createDefaultProgress();
      }
    }
  }

  return createDefaultProgress();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadProgress, createDefaultProgress };
} else if (typeof window !== 'undefined') {
  window.RPG_ProgressLoader = { loadProgress, createDefaultProgress };
}
