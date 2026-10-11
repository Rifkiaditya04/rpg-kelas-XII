/**
 * Pool Loader
 * Reads JSON question pools from the filesystem, removes BOM, normalizes keys,
 * and validates question data integrity.
 */
const fs = require('fs');
const path = require('path');
const Config = require('../../core/config');

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`[PoolLoader] File not found: ${filePath}`);
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  // Strip UTF-8 / UTF-16 BOM if present
  const clean = raw.replace(/^\uFEFF/, '').trim();
  return JSON.parse(clean);
}

function normalizeQuestion(q, poolId) {
  return {
    question_id: q.question_id,
    pool_id: poolId,
    primary_competency: q.primary_competency || '',
    secondary_competencies: Array.isArray(q.secondary_competencies) ? q.secondary_competencies : [],
    difficulty_label: q.difficulty_label || 'medium',
    cognitive_level: q.cognitive_level || 'apply',
    question_type: q.question_type || 'single_select',
    question_role: q.question_role || 'practice',
    question: q.question || '',
    options: Array.isArray(q.options) ? q.options.map(opt => ({ id: opt.id, text: opt.text })) : [],
    answer: q.answer || '',
    explanation: q.explanation || '',
    estimated_time_seconds: q.estimated_time_seconds || 90,
    tka_alignment: q.tka_alignment || { suitable: false, competency: '', stimulus_type: '' },
    gameplay: {
      correct_damage: q.gameplay?.correct_damage || 100,
      wrong_penalty: q.gameplay?.wrong_penalty || 5,
      base_xp: q.gameplay?.base_xp || 10,
      attack_type: q.gameplay?.attack_type || 'medium'
    }
  };
}

function normalizePool(raw, subject, chapter) {
  const poolId = raw.pool_id || `pool-${subject}-${chapter}`;
  const questions = (raw.questions || []).map(q => normalizeQuestion(q, poolId));

  return {
    pool_id: poolId,
    track: raw.track || 'wajib',
    subject: subject,
    chapter: chapter,
    questions: questions,
    total_questions: questions.length
  };
}

/**
 * Load pool from filesystem
 * @param {string} subject - e.g. "bahasa-indonesia", "matematika", "bahasa-inggris"
 * @param {string} chapter - e.g. "BI12-C01", "MAT12-C01", "ENG12-C01"
 * @param {string} customBaseDir - optional custom directory
 */
function loadPool(subject, chapter, customBaseDir = null) {
  const base = customBaseDir || Config.paths.poolsDir;
  const filePath = path.join(base, subject, `pool-${subject}-${chapter}.json`);
  const raw = readJsonFile(filePath);
  return normalizePool(raw, subject, chapter);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadPool, normalizePool, normalizeQuestion };
} else if (typeof window !== 'undefined') {
  window.RPG_PoolLoader = { loadPool, normalizePool, normalizeQuestion };
}
