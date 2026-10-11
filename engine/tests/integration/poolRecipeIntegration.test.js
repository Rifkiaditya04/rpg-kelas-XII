/**
 * Integration Test: Pool & Recipe Cross-Validation
 * Verifies that all 3 active recipes match their corresponding competency maps and question pools.
 */
const assert = require('assert');
const { PoolRepository } = require('../../data/repositories/poolRepository');
const { RecipeRepository } = require('../../data/repositories/recipeRepository');
const { loadCompetencyMap } = require('../../data/loaders/competencyMapLoader');
const { selectQuestions } = require('../../learning/questionSelector');

function runPoolRecipeIntegrationTests() {
  console.log('--- Testing Integration: poolRecipeIntegration.test.js ---');

  const poolRepo = new PoolRepository();
  const recipeRepo = new RecipeRepository();
  const compMap = loadCompetencyMap();

  const testCases = [
    { subject: 'bahasa-indonesia', recipeFile: 'mission-recipes-bid-ch1.json', chapter: 'BI12-C01' },
    { subject: 'matematika', recipeFile: 'mission-recipes-mat-ch1.json', chapter: 'MAT12-C01' },
    { subject: 'bahasa-inggris', recipeFile: 'mission-recipes-eng-ch1.json', chapter: 'ENG12-C01' }
  ];

  for (const tc of testCases) {
    console.log(`Testing subject: ${tc.subject}...`);

    // 1. Load Recipe
    const recipe = recipeRepo.getRecipe(tc.subject, tc.recipeFile);
    assert.ok(recipe, `Recipe must exist for ${tc.subject}`);
    assert.strictEqual(recipe.status, 'active');

    // 2. Validate all competencies against Competency Map
    for (const w of recipe.selection_rule.competency_weights) {
      assert.ok(
        compMap.hasCompetency(w.competency_id),
        `Competency ${w.competency_id} from ${tc.recipeFile} must exist in competency_map.json`
      );
    }

    // 3. Load Pool
    const pool = poolRepo.getPool(tc.subject, tc.chapter);
    assert.ok(pool, `Pool must exist for ${tc.subject}`);
    assert.ok(pool.questions.length >= recipe.question_count, 'Pool must have enough questions');

    // 4. Test Selection
    const selected = selectQuestions({ pool, recipe });
    assert.strictEqual(
      selected.length,
      recipe.question_count,
      `Selector must return exactly ${recipe.question_count} questions for ${tc.subject}`
    );

    // 5. Verify warm-up scaffolding
    assert.strictEqual(
      selected[0].difficulty_label,
      'easy',
      `Subject ${tc.subject} must start with an EASY warm-up question`
    );

    // 6. Verify question integrity
    for (const q of selected) {
      assert.ok(q.question_id, 'Question must have id');
      assert.ok(q.question, 'Question must have text prompt');
      assert.ok(q.options && q.options.length >= 2, 'Question must have at least 2 options');
      assert.ok(q.answer, 'Question must have correct answer key');
      assert.ok(q.gameplay?.correct_damage > 0, 'Question must have positive correct_damage');
    }
  }

  console.log('✓ All poolRecipeIntegration tests passed!\n');
}

if (require.main === module) {
  runPoolRecipeIntegrationTests();
}

module.exports = { runPoolRecipeIntegrationTests };
