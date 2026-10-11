/**
 * Unit Test: Question Selector
 */
const assert = require('assert');
const { selectQuestions } = require('../../learning/questionSelector');

function runQuestionSelectorTests() {
  console.log('--- Testing questionSelector.js ---');

  // Mock Pool
  const mockPool = {
    pool_id: 'mock-pool',
    questions: [
      { question_id: 'Q-EASY-1', difficulty_label: 'easy', primary_competency: 'COMP-A' },
      { question_id: 'Q-EASY-2', difficulty_label: 'easy', primary_competency: 'COMP-A' },
      { question_id: 'Q-MED-1', difficulty_label: 'medium', primary_competency: 'COMP-A' },
      { question_id: 'Q-MED-2', difficulty_label: 'medium', primary_competency: 'COMP-A' },
      { question_id: 'Q-MED-3', difficulty_label: 'medium', primary_competency: 'COMP-A' },
      { question_id: 'Q-HARD-1', difficulty_label: 'hard', primary_competency: 'COMP-A' }
    ]
  };

  const mockRecipe = {
    mission_id: 'TEST-M1',
    selection_rule: {
      difficulty_distribution: { easy: 2, medium: 2, hard: 1 },
      competency_weights: [{ competency_id: 'COMP-A', weight: 1.0 }],
      fallback: { if_hard_unavailable: 'use_medium', if_medium_unavailable: 'use_easy' }
    }
  };

  // 1. Memilih jumlah soal sesuai recipe
  const selected = selectQuestions({ pool: mockPool, recipe: mockRecipe });
  assert.strictEqual(selected.length, 5, 'Should select exactly 5 questions as defined in recipe');

  // 2. Tidak mengambil soal duplikat
  const ids = selected.map(q => q.question_id);
  const uniqueIds = new Set(ids);
  assert.strictEqual(ids.length, uniqueIds.size, 'Should not contain duplicate questions within the session');

  // 3. Mematuhi kurva scaffolding (Easy di awal)
  assert.strictEqual(selected[0].difficulty_label, 'easy', 'First question should be easy (warmup)');
  assert.strictEqual(selected[1].difficulty_label, 'easy', 'Second question should be easy');
  assert.strictEqual(selected[selected.length - 1].difficulty_label, 'hard', 'Last question should be hard challenge');

  // 4. Mematuhi cooldown
  const historyWithCooldown = {
    cooldowns: { 'Q-EASY-1': 2 }
  };
  const selectedWithCooldown = selectQuestions({
    pool: mockPool,
    recipe: mockRecipe,
    history: historyWithCooldown
  });
  const cooldownIds = selectedWithCooldown.map(q => q.question_id);
  assert.ok(!cooldownIds.includes('Q-EASY-1'), 'Question on cooldown should be excluded');

  // 5. Fallback bekerja jika hard tidak cukup
  const poolWithoutHard = {
    pool_id: 'mock-pool-no-hard',
    questions: [
      { question_id: 'Q-E-1', difficulty_label: 'easy', primary_competency: 'COMP-A' },
      { question_id: 'Q-E-2', difficulty_label: 'easy', primary_competency: 'COMP-A' },
      { question_id: 'Q-M-1', difficulty_label: 'medium', primary_competency: 'COMP-A' },
      { question_id: 'Q-M-2', difficulty_label: 'medium', primary_competency: 'COMP-A' },
      { question_id: 'Q-M-3', difficulty_label: 'medium', primary_competency: 'COMP-A' }
    ]
  };
  const selectedWithFallback = selectQuestions({
    pool: poolWithoutHard,
    recipe: mockRecipe
  });
  assert.strictEqual(selectedWithFallback.length, 5, 'Fallback should satisfy total question count');
  assert.strictEqual(
    selectedWithFallback.filter(q => q.difficulty_label === 'medium').length,
    3,
    'Medium should be used in place of unavailable hard'
  );

  console.log('✓ All questionSelector tests passed!\n');
}

if (require.main === module) {
  runQuestionSelectorTests();
}

module.exports = { runQuestionSelectorTests };
