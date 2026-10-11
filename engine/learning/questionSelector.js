/**
 * Question Selector
 * Selects and sequences questions according to mission recipe rules,
 * scaffolding learning curve (easy warmup -> medium reinforcement -> hard challenge),
 * competency weights, cooldown filters, and fallback policies.
 */
const { CooldownManager } = require('./cooldownManager');

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectQuestions({ pool, recipe, history = {}, mastery = {} }) {
  if (!pool || !pool.questions) {
    throw new Error('[QuestionSelector] Invalid or empty question pool provided');
  }
  if (!recipe || !recipe.selection_rule) {
    throw new Error('[QuestionSelector] Invalid mission recipe provided');
  }

  const selectionRule = recipe.selection_rule;
  const targetDistribution = { ...selectionRule.difficulty_distribution };
  const fallback = selectionRule.fallback || {};
  const validCompetencies = selectionRule.competency_weights.map(w => w.competency_id);
  const activeCooldowns = history.cooldowns || {};
  const currentSessionAnswered = history.recent_answered || [];

  // Filter pool candidates: must match target competencies and not be in cooldown or already used
  const poolQuestions = pool.questions.filter(q => {
    // 1. Competency filter
    if (validCompetencies.length > 0 && !validCompetencies.includes(q.primary_competency)) {
      return false;
    }
    // 2. Cooldown filter
    if (!CooldownManager.isAvailable(q.question_id, activeCooldowns)) {
      return false;
    }
    // 3. Current session duplicate filter
    if (currentSessionAnswered.includes(q.question_id)) {
      return false;
    }
    return true;
  });

  const selected = [];
  const usedIds = new Set();

  // Helper to pick candidate matching criteria
  function pickCandidate(diffLevel) {
    let candidates = poolQuestions.filter(q => 
      q.difficulty_label === diffLevel && !usedIds.has(q.question_id)
    );

    if (candidates.length === 0) {
      return null;
    }

    // Sort candidates: prioritize competencies where player has lowest mastery
    candidates.sort((a, b) => {
      const masteryA = mastery[a.primary_competency] ?? 0.5;
      const masteryB = mastery[b.primary_competency] ?? 0.5;
      return masteryA - masteryB;
    });

    // Pick among best tier with slight shuffle for variety
    const topCandidates = candidates.slice(0, Math.min(3, candidates.length));
    const chosen = topCandidates[Math.floor(Math.random() * topCandidates.length)];
    usedIds.add(chosen.question_id);
    return chosen;
  }

  // Iterate difficulties in scaffolding order: easy (warmup) -> medium -> hard
  const stages = ['easy', 'medium', 'hard'];

  for (const diff of stages) {
    let needed = targetDistribution[diff] || 0;
    while (needed > 0) {
      let picked = pickCandidate(diff);

      // Handle Fallback if candidate not found
      if (!picked) {
        if (diff === 'hard' && fallback.if_hard_unavailable === 'use_medium') {
          picked = pickCandidate('medium');
        } else if (diff === 'medium' && fallback.if_medium_unavailable === 'use_easy') {
          picked = pickCandidate('easy');
        } else if (diff === 'easy' && fallback.if_easy_unavailable === 'content_gap') {
          // If strictly require warmup and no easy available, fallback to any available or flag
          picked = pickCandidate('medium');
        }
      }

      if (picked) {
        selected.push(picked);
      }
      needed--;
    }
  }

  return selected;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { selectQuestions };
} else if (typeof window !== 'undefined') {
  window.RPG_QuestionSelector = { selectQuestions };
}
