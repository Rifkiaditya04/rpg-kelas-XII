/**
 * Progress Repository
 * Persistence adapter for player progress.
 */
const fs = require('fs');
const path = require('path');
const Config = require('../../core/config');
const { loadProgress, createDefaultProgress } = require('../loaders/progressLoader');

class ProgressRepository {
  constructor(filePath = null) {
    this.filePath = filePath || Config.paths.defaultProgressFile;
  }

  get() {
    return loadProgress(this.filePath);
  }

  save(progressData) {
    const payload = {
      ...progressData,
      last_updated: new Date().toISOString()
    };

    // Node environment
    if (typeof fs !== 'undefined' && fs.writeFileSync) {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.filePath, JSON.stringify(payload, null, 2), 'utf-8');
      return true;
    }

    // Browser environment
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('RPG_PLAYER_PROGRESS', JSON.stringify(payload));
      return true;
    }

    return false;
  }

  reset() {
    const fresh = createDefaultProgress();
    this.save(fresh);
    return fresh;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProgressRepository };
} else if (typeof window !== 'undefined') {
  window.RPG_ProgressRepository = { ProgressRepository };
}
