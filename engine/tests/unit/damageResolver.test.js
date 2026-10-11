/**
 * Unit Test: Damage Resolver
 */
const assert = require('assert');
const { DamageResolver } = require('../../battle/damageResolver');
const { RewardResolver } = require('../../battle/rewardResolver');

function runDamageResolverTests() {
  console.log('--- Testing damageResolver.js & rewardResolver.js ---');

  const mockQuestion = {
    gameplay: {
      correct_damage: 100,
      wrong_penalty: 15,
      base_xp: 20
    }
  };

  // 1. Damage dasar sesuai gameplay
  const baseDmg = DamageResolver.calculateEnemyDamage({ question: mockQuestion, combo: 1 });
  assert.strictEqual(baseDmg, 100, 'Base damage at 1 combo should equal correct_damage');

  // 2. Damage combo scaling
  const comboDmg = DamageResolver.calculateEnemyDamage({ question: mockQuestion, combo: 3 });
  assert.ok(comboDmg > baseDmg, `Damage with 3 combo should be higher than base damage (got ${comboDmg})`);

  // 3. Penalty pemain saat salah
  const penalty = DamageResolver.calculatePlayerPenalty({ question: mockQuestion });
  assert.strictEqual(penalty, 15, 'Penalty should equal question wrong_penalty');

  // 4. Reward XP sesuai gameplay
  const correctReward = RewardResolver.resolveQuestionReward(mockQuestion, true, 1);
  assert.strictEqual(correctReward.xp, 20, 'Correct answer should grant question base_xp');

  const wrongReward = RewardResolver.resolveQuestionReward(mockQuestion, false, 0);
  assert.strictEqual(wrongReward.xp, 0, 'Wrong answer should grant 0 XP');

  console.log('✓ All damageResolver tests passed!\n');
}

if (require.main === module) {
  runDamageResolverTests();
}

module.exports = { runDamageResolverTests };
