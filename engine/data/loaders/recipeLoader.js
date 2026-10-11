/**
 * Recipe Loader
 * Reads and normalizes mission recipes from the filesystem.
 */
const fs = require('fs');
const path = require('path');
const Config = require('../../core/config');

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`[RecipeLoader] File not found: ${filePath}`);
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const clean = raw.replace(/^\uFEFF/, '').trim();
  return JSON.parse(clean);
}

function normalizeRecipe(raw) {
  if (!raw.mission_id) {
    throw new Error('[RecipeLoader] Recipe missing mandatory field: mission_id');
  }

  const selectionRule = raw.selection_rule || {};
  const diffDist = selectionRule.difficulty_distribution || { easy: 1, medium: 2, hard: 1 };

  return {
    mission_id: raw.mission_id,
    mission_name: raw.mission_name || 'Untitled Mission',
    version: raw.version || 1,
    status: raw.status || 'active',
    mission_type: raw.mission_type || 'guided_learning',
    question_count: raw.question_count || (diffDist.easy + diffDist.medium + diffDist.hard),
    learning_curve_policy: {
      minimum_easy: raw.learning_curve_policy?.minimum_easy ?? 1,
      maximum_hard_ratio: raw.learning_curve_policy?.maximum_hard_ratio ?? 0.4,
      require_warmup: raw.learning_curve_policy?.require_warmup ?? true
    },
    selection_rule: {
      difficulty_distribution: {
        easy: diffDist.easy ?? 0,
        medium: diffDist.medium ?? 0,
        hard: diffDist.hard ?? 0
      },
      competency_weights: Array.isArray(selectionRule.competency_weights)
        ? selectionRule.competency_weights.map(w => ({
            competency_id: w.competency_id,
            weight: Number(w.weight)
          }))
        : [],
      fallback: {
        if_easy_unavailable: selectionRule.fallback?.if_easy_unavailable || 'content_gap',
        if_medium_unavailable: selectionRule.fallback?.if_medium_unavailable || 'use_easy',
        if_hard_unavailable: selectionRule.fallback?.if_hard_unavailable || 'use_medium',
        if_pool_below_minimum: selectionRule.fallback?.if_pool_below_minimum || 'block_mission'
      }
    },
    constraints: {
      no_duplicate_in_session: raw.constraints?.no_duplicate_in_session ?? true,
      cooldown_sessions: raw.constraints?.cooldown_sessions ?? 3,
      wrong_answer_cooldown_sessions: raw.constraints?.wrong_answer_cooldown_sessions ?? 1,
      prerequisites_required: raw.constraints?.prerequisites_required ?? true
    },
    story: {
      scene: raw.story?.scene || 'Briefing Room',
      npc: raw.story?.npc || 'Mentor',
      enemy: raw.story?.enemy || 'Guardian',
      objective: raw.story?.objective || 'Complete the assignment'
    }
  };
}

/**
 * Load recipe from filesystem
 * @param {string} subject 
 * @param {string} filename 
 * @param {string} customBaseDir 
 */
function loadRecipe(subject, filename, customBaseDir = null) {
  const base = customBaseDir || Config.paths.missionsDir;
  const filePath = path.join(base, subject, filename);
  const raw = readJsonFile(filePath);
  return normalizeRecipe(raw);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadRecipe, normalizeRecipe };
} else if (typeof window !== 'undefined') {
  window.RPG_RecipeLoader = { loadRecipe, normalizeRecipe };
}
