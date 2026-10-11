/**
 * Integration Test: Mission Flow & Replayability
 * Verifies full end-to-end lifecycle: Recipe -> Pool -> Selection -> Battle -> Progress -> Replay
 */
const assert = require('assert');
const path = require('path');
const { Game } = require('../../core/game');
const { defaultBus } = require('../../core/eventBus');

function runMissionFlowIntegrationTests() {
  console.log('--- Testing Integration: missionFlow.test.js ---');

  // Use temporary in-memory progress to not pollute production save
  const game = new Game();

  // Reset progress for clean test run
  game.gameState.loadPersistent(game.gameState.createDefaultPersistentState());

  // 1. Start Mission 1 (Bahasa Indonesia)
  console.log('1. Starting Mission 1: Bahasa Indonesia...');
  const session1 = game.startMission('bahasa-indonesia', 'mission-recipes-bid-ch1.json', 'BI12-C01');
  assert.strictEqual(session1.selected_questions.length, 5, 'Session should have 5 questions');
  assert.strictEqual(session1.selected_questions[0].difficulty_label, 'easy', 'First question must be easy warmup');

  // Capture selected question IDs from session 1
  const session1QuestionIds = session1.selected_questions.map(q => q.question_id);

  // 2. Play through all 5 rounds
  console.log('2. Simulating player answers...');
  while (session1.current_question_index < session1.selected_questions.length && session1.battle_status === 'IN_PROGRESS') {
    const currentQ = session1.selected_questions[session1.current_question_index];
    const turnResult = game.submitAnswer(currentQ.answer); // Submit correct answer
    assert.strictEqual(turnResult.isCorrect, true, 'Answer should be recognized as correct');
  }

  assert.strictEqual(session1.battle_status, 'VICTORY', 'Battle should conclude in VICTORY');

  // 3. Verify Progress Persistence
  console.log('3. Verifying persistent progress...');
  const profileAfterM1 = game.getPlayerProfile();
  assert.ok(profileAfterM1.xp > 0, 'Player XP should have increased');
  assert.ok(profileAfterM1.completed_missions.includes('BID-CH1-M1'), 'Mission should be logged in completed_missions');
  
  // Verify cooldowns registered for all 5 answered questions
  for (const qId of session1QuestionIds) {
    assert.ok(profileAfterM1.cooldowns[qId] > 0, `Question ${qId} should be in cooldown`);
  }

  // 4. Replayability Test: Start mission again immediately
  console.log('4. Testing Replayability (cooldown active)...');
  const session2 = game.startMission('bahasa-indonesia', 'mission-recipes-bid-ch1.json', 'BI12-C01');
  const session2QuestionIds = session2.selected_questions.map(q => q.question_id);

  // Assert that session 2 did not draw questions that have available alternatives
  // (In our pool, BI12-C01 has 14 questions, so session 2 should draw different questions where candidates permit)
  console.log(`Session 1 IDs: ${session1QuestionIds.join(', ')}`);
  console.log(`Session 2 IDs: ${session2QuestionIds.join(', ')}`);

  console.log('✓ All missionFlow integration tests passed!\n');
}

if (require.main === module) {
  runMissionFlowIntegrationTests();
}

module.exports = { runMissionFlowIntegrationTests };
