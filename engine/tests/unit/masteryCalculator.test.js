/**
 * Unit Test: Mastery Calculator
 */
const assert = require('assert');
const { MasteryCalculator } = require('../../learning/masteryCalculator');

function runMasteryCalculatorTests() {
  console.log('--- Testing masteryCalculator.js ---');

  // 1. Mastery naik jika benar
  const initialMastery = 0.5;
  const afterCorrect = MasteryCalculator.updateCompetencyMastery({
    currentMastery: initialMastery,
    isCorrect: true,
    difficulty: 'medium'
  });
  assert.ok(afterCorrect > initialMastery, `Mastery should increase on correct answer (from ${initialMastery} to ${afterCorrect})`);

  // 2. Mastery turun jika salah
  const afterWrong = MasteryCalculator.updateCompetencyMastery({
    currentMastery: initialMastery,
    isCorrect: false,
    difficulty: 'medium'
  });
  assert.ok(afterWrong < initialMastery, `Mastery should decrease on incorrect answer (from ${initialMastery} to ${afterWrong})`);

  // 3. Mastery tidak berubah drastis dari satu soal (smooth EWMA)
  const delta = Math.abs(afterCorrect - initialMastery);
  assert.ok(delta <= 0.20, `Single answer delta should be moderated (got delta ${delta})`);

  // 4. Batch update from session
  const sessionLog = [
    { competency: 'COMP-1', is_correct: true, difficulty: 'easy' },
    { competency: 'COMP-1', is_correct: true, difficulty: 'medium' },
    { competency: 'COMP-2', is_correct: false, difficulty: 'hard' }
  ];
  const updatedMap = MasteryCalculator.updateFromSession({}, sessionLog);
  assert.ok(updatedMap['COMP-1'] > 0.5, 'COMP-1 should have increased mastery');
  assert.ok(updatedMap['COMP-2'] < 0.5, 'COMP-2 should have decreased mastery');

  console.log('✓ All masteryCalculator tests passed!\n');
}

if (require.main === module) {
  runMasteryCalculatorTests();
}

module.exports = { runMasteryCalculatorTests };
