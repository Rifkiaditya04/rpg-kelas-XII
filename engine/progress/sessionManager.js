/**
 * Session Manager
 * Orchestrates the creation, lifecycle, and teardown of mission sessions.
 */
const { EnemyFactory } = require('../battle/enemyFactory');
const Config = require('../core/config');

class SessionManager {
  /**
   * Create and initialize a new mission battle session
   * @param {Object} recipe 
   * @param {Array} selectedQuestions 
   * @param {Object} playerPersistent 
   * @returns {Object} session object
   */
  static createSession(recipe, selectedQuestions, playerPersistent = {}) {
    const enemy = EnemyFactory.createEnemy(recipe);
    const initialPlayerHp = Config.gameplay.player.initialHp;

    return {
      session_id: `SES-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      mission_id: recipe.mission_id,
      mission_name: recipe.mission_name,
      mission_type: recipe.mission_type,
      start_time: new Date().toISOString(),
      current_question_index: 0,
      selected_questions: selectedQuestions,
      player_hp: initialPlayerHp,
      player_max_hp: initialPlayerHp,
      enemy_id: enemy.enemy_id,
      enemy_name: enemy.name,
      enemy_title: enemy.title,
      enemy_hp: enemy.current_hp,
      enemy_max_hp: enemy.max_hp,
      combo: 0,
      max_combo: 0,
      total_damage_dealt: 0,
      total_damage_taken: 0,
      total_xp_gained: 0,
      answers_log: [],
      battle_status: 'IN_PROGRESS'
    };
  }

  /**
   * Summarize session performance
   * @param {Object} session 
   * @returns {Object}
   */
  static summarizeSession(session) {
    const totalQuestions = session.selected_questions.length;
    const answeredCount = session.answers_log.length;
    const correctCount = session.answers_log.filter(a => a.is_correct).length;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    return {
      session_id: session.session_id,
      mission_id: session.mission_id,
      mission_name: session.mission_name,
      battle_status: session.battle_status,
      total_questions: totalQuestions,
      answered_count: answeredCount,
      correct_count: correctCount,
      accuracy_percent: accuracy,
      max_combo: session.max_combo,
      total_damage_dealt: session.total_damage_dealt,
      total_xp_gained: session.total_xp_gained
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SessionManager };
} else if (typeof window !== 'undefined') {
  window.RPG_SessionManager = { SessionManager };
}
