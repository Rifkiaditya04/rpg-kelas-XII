/**
 * Enemy Factory
 * Creates and scales enemy battle opponents based on mission recipes and difficulty.
 */
class EnemyFactory {
  /**
   * Create an enemy instance based on recipe story and question count
   * @param {Object} recipe 
   * @returns {Object} enemy instance
   */
  static createEnemy(recipe) {
    const enemyName = recipe.story?.enemy || 'Guardian of Wisdom';
    const qCount = recipe.question_count || 5;
    
    // Scale enemy HP so that answering ~80% of questions correctly defeats the enemy
    const estimatedDamagePerQuestion = 100;
    const scaledHp = Math.round(qCount * estimatedDamagePerQuestion * 0.85);

    return {
      enemy_id: `ENM-${recipe.mission_id}`,
      name: enemyName,
      title: recipe.story?.scene ? `Penjaga ${recipe.story.scene}` : 'Penjaga Ujian',
      max_hp: scaledHp,
      current_hp: scaledHp,
      attack_power: 15,
      npc_counterpart: recipe.story?.npc || 'Mentor'
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EnemyFactory };
} else if (typeof window !== 'undefined') {
  window.RPG_EnemyFactory = { EnemyFactory };
}
