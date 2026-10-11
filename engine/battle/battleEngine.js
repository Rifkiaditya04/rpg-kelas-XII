/**
 * Battle Engine
 * Manages the turn-by-turn resolution of RPG quiz battles, HP modifications,
 * combo streaks, event emission, and win/loss state determination.
 */
const { DamageResolver } = require('./damageResolver');
const { RewardResolver } = require('./rewardResolver');

class BattleEngine {
  constructor(eventBus = null) {
    this.eventBus = eventBus;
  }

  /**
   * Submit an answer to the current active question in a battle session
   * @param {Object} session - active session object
   * @param {string} selectedOption - player choice ('A', 'B', 'C', 'D')
   * @returns {Object} turn resolution result
   */
  resolveTurn(session, selectedOption) {
    if (!session || !session.selected_questions) {
      throw new Error('[BattleEngine] No active session available');
    }
    if (session.battle_status !== 'IN_PROGRESS') {
      throw new Error(`[BattleEngine] Battle already finished with status: ${session.battle_status}`);
    }

    const currentIndex = session.current_question_index;
    const currentQuestion = session.selected_questions[currentIndex];

    if (!currentQuestion) {
      throw new Error(`[BattleEngine] No question found at index ${currentIndex}`);
    }

    const isCorrect = String(selectedOption).trim().toUpperCase() === String(currentQuestion.answer).trim().toUpperCase();

    // 1. Update Combos
    if (isCorrect) {
      session.combo += 1;
      if (session.combo > session.max_combo) {
        session.max_combo = session.combo;
      }
    } else {
      session.combo = 0;
    }

    // 2. Resolve Damage
    let damageDealt = 0;
    let damageTaken = 0;

    if (isCorrect) {
      damageDealt = DamageResolver.calculateEnemyDamage({
        question: currentQuestion,
        combo: session.combo
      });
      session.enemy_hp = Math.max(0, session.enemy_hp - damageDealt);
      session.total_damage_dealt += damageDealt;
    } else {
      damageTaken = DamageResolver.calculatePlayerPenalty({
        question: currentQuestion
      });
      session.player_hp = Math.max(0, session.player_hp - damageTaken);
      session.total_damage_taken += damageTaken;
    }

    // 3. Resolve Rewards
    const rewards = RewardResolver.resolveQuestionReward(currentQuestion, isCorrect, session.combo);
    session.total_xp_gained += rewards.xp;

    // 4. Log Answer
    const answerRecord = {
      round: currentIndex + 1,
      question_id: currentQuestion.question_id,
      competency: currentQuestion.primary_competency,
      difficulty: currentQuestion.difficulty_label,
      selected_option: selectedOption,
      correct_answer: currentQuestion.answer,
      is_correct: isCorrect,
      damage_dealt: damageDealt,
      damage_taken: damageTaken,
      xp_earned: rewards.xp,
      gold_earned: rewards.gold
    };
    session.answers_log.push(answerRecord);

    // 5. Emit Events
    if (this.eventBus) {
      this.eventBus.emit(isCorrect ? 'answer:correct' : 'answer:wrong', {
        question: currentQuestion,
        answerRecord,
        session
      });

      if (damageDealt > 0) {
        this.eventBus.emit('battle:enemy_damaged', {
          damage: damageDealt,
          remainingHp: session.enemy_hp,
          maxHp: session.enemy_max_hp
        });
      }

      if (damageTaken > 0) {
        this.eventBus.emit('battle:player_damaged', {
          damage: damageTaken,
          remainingHp: session.player_hp,
          maxHp: session.player_max_hp
        });
      }
    }

    // 6. Check Battle End Conditions
    session.current_question_index += 1;
    const isOutOfQuestions = session.current_question_index >= session.selected_questions.length;
    const isEnemyDefeated = session.enemy_hp <= 0;
    const isPlayerDefeated = session.player_hp <= 0;

    let isBattleComplete = false;
    if (isPlayerDefeated) {
      session.battle_status = 'DEFEAT';
      isBattleComplete = true;
    } else if (isEnemyDefeated || isOutOfQuestions) {
      session.battle_status = 'VICTORY';
      isBattleComplete = true;
    }

    if (isBattleComplete && this.eventBus) {
      this.eventBus.emit('battle:completed', {
        status: session.battle_status,
        session
      });
    }

    return {
      round: currentIndex + 1,
      isCorrect,
      correctAnswer: currentQuestion.answer,
      explanation: currentQuestion.explanation,
      damageDealt,
      damageTaken,
      xpEarned: rewards.xp,
      goldEarned: rewards.gold,
      currentCombo: session.combo,
      enemyHp: session.enemy_hp,
      playerHp: session.player_hp,
      isBattleComplete,
      battleStatus: session.battle_status
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BattleEngine };
} else if (typeof window !== 'undefined') {
  window.RPG_BattleEngine = { BattleEngine };
}
