/**
 * Unit Test: Cooldown Manager
 */
const assert = require('assert');
const { CooldownManager } = require('../../learning/cooldownManager');

function runCooldownManagerTests() {
  console.log('--- Testing cooldownManager.js ---');

  // 1. isAvailable check
  assert.strictEqual(CooldownManager.isAvailable('Q1', {}), true, 'Unregistered question should be available');
  assert.strictEqual(CooldownManager.isAvailable('Q1', { 'Q1': 2 }), false, 'Question with remaining sessions should not be available');
  assert.strictEqual(CooldownManager.isAvailable('Q1', { 'Q1': 0 }), true, 'Question with 0 sessions remaining should be available');

  // 2. Register cooldown
  let cooldowns = {};
  cooldowns = CooldownManager.registerCooldown('Q-CORRECT', true, cooldowns);
  assert.strictEqual(cooldowns['Q-CORRECT'], 3, 'Correct answer should get standard cooldown sessions (3)');

  cooldowns = CooldownManager.registerCooldown('Q-WRONG', false, cooldowns);
  assert.strictEqual(cooldowns['Q-WRONG'], 1, 'Wrong answer should get shorter cooldown sessions (1)');

  // 3. Decrement cooldowns
  const decremented = CooldownManager.decrementCooldowns(cooldowns);
  assert.strictEqual(decremented['Q-CORRECT'], 2, 'Q-CORRECT should decrement from 3 to 2');
  assert.strictEqual(decremented['Q-WRONG'], undefined, 'Q-WRONG (1 session) should expire after decrement');

  console.log('✓ All cooldownManager tests passed!\n');
}

if (require.main === module) {
  runCooldownManagerTests();
}

module.exports = { runCooldownManagerTests };
