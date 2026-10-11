/**
 * Pool Repository
 * Data access layer for question pools. Provides in-memory caching and querying
 * so business logic never accesses file system or raw JSON directly.
 */
const { loadPool } = require('../loaders/poolLoader');

class PoolRepository {
  constructor(baseDir = null) {
    this.baseDir = baseDir;
    this.cache = new Map(); // key: `${subject}:${chapter}` -> Pool Object
  }

  getPoolKey(subject, chapter) {
    return `${subject}:${chapter}`;
  }

  getPool(subject, chapter) {
    const key = this.getPoolKey(subject, chapter);
    if (!this.cache.has(key)) {
      const pool = loadPool(subject, chapter, this.baseDir);
      this.cache.set(key, pool);
    }
    return this.cache.get(key);
  }

  getQuestionsByCompetency(subject, chapter, competencyId) {
    const pool = this.getPool(subject, chapter);
    return pool.questions.filter(q => q.primary_competency === competencyId);
  }

  queryQuestions(subject, chapter, criteria = {}) {
    const pool = this.getPool(subject, chapter);
    return pool.questions.filter(q => {
      if (criteria.difficulty && q.difficulty_label !== criteria.difficulty) {
        return false;
      }
      if (criteria.competencies && !criteria.competencies.includes(q.primary_competency)) {
        return false;
      }
      if (criteria.cognitive_level && q.cognitive_level !== criteria.cognitive_level) {
        return false;
      }
      if (criteria.tka_only && !q.tka_alignment?.suitable) {
        return false;
      }
      return true;
    });
  }

  clearCache() {
    this.cache.clear();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PoolRepository };
} else if (typeof window !== 'undefined') {
  window.RPG_PoolRepository = { PoolRepository };
}
