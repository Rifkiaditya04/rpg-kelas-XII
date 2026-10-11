/**
 * Game Facade
 * Primary orchestration entry point for the Class XII Educational RPG Game Engine.
 * Decouples presentation/UI from data storage and business logic.
 */
const { defaultBus } = require('./eventBus');
const { GameStates, GameStateManager } = require('./gameState');
const { PoolRepository } = require('../data/repositories/poolRepository');
const { RecipeRepository } = require('../data/repositories/recipeRepository');
const { ProgressRepository } = require('../data/repositories/progressRepository');
const { ProgressStore } = require('../progress/progressStore');
const { SessionManager } = require('../progress/sessionManager');
const { selectQuestions } = require('../learning/questionSelector');
const { BattleEngine } = require('../battle/battleEngine');
const { RemediationSelector } = require('../learning/remediationSelector');

class Game {
  constructor(options = {}) {
    this.eventBus = options.eventBus || defaultBus;
    this.gameState = new GameStateManager(this.eventBus);
    
    // Repositories
    this.poolRepo = new PoolRepository(options.poolsDir);
    this.recipeRepo = new RecipeRepository(options.missionsDir);
    this.progressRepo = new ProgressRepository(options.progressFile);

    // Core managers
    this.progressStore = new ProgressStore(this.progressRepo, this.eventBus);
    this.battleEngine = new BattleEngine(this.eventBus);

    // Load initial persistent state
    const saved = this.progressRepo.get();
    this.gameState.loadPersistent(saved);
  }

  /**
   * Start a mission by subject and recipe filename
   * @param {string} subject - "bahasa-indonesia" | "matematika" | "bahasa-inggris"
   * @param {string} recipeFilename - e.g. "mission-recipes-bid-ch1.json"
   * @param {string} chapterId - e.g. "BI12-C01"
   */
  startMission(subject, recipeFilename, chapterId) {
    const recipe = this.recipeRepo.getRecipe(subject, recipeFilename);
    const pool = this.poolRepo.getPool(subject, chapterId);
    const persistent = this.gameState.getPersistent();

    // Select questions adhering to learning curve, weights, and cooldowns
    const selectedQuestions = selectQuestions({
      pool,
      recipe,
      history: {
        cooldowns: persistent.cooldowns,
        recent_answered: []
      },
      mastery: persistent.mastery
    });

    if (selectedQuestions.length === 0) {
      throw new Error(`[Game] Could not select any questions for mission ${recipe.mission_id}`);
    }

    // Initialize session and state transition
    const session = SessionManager.createSession(recipe, selectedQuestions, persistent);
    this.gameState.startSession(session);
    this.gameState.transition(GameStates.BATTLE, { missionId: recipe.mission_id });

    this.eventBus.emit('mission:started', {
      mission: recipe,
      session,
      firstQuestion: selectedQuestions[0]
    });

    return session;
  }

  /**
   * Submit an answer to the current battle question
   * @param {string} selectedOption - 'A', 'B', 'C', or 'D'
   */
  submitAnswer(selectedOption) {
    const session = this.gameState.getSession();
    if (!session) {
      throw new Error('[Game] Cannot submit answer: no active mission session');
    }

    const result = this.battleEngine.resolveTurn(session, selectedOption);

    // If battle complete, transition to RESULT
    if (result.isBattleComplete) {
      this.gameState.transition(GameStates.RESULT, { status: result.battleStatus });
      this.concludeSession();
    }

    return result;
  }

  /**
   * Finalize and persist session rewards and stats
   */
  concludeSession() {
    const session = this.gameState.getSession();
    if (!session) return null;

    const currentPersistent = this.gameState.getPersistent();
    const updatedPersistent = this.progressStore.commitSession(session, currentPersistent);
    this.gameState.loadPersistent(updatedPersistent);

    const summary = SessionManager.summarizeSession(session);
    this.eventBus.emit('mission:concluded', { summary, updatedPersistent });
    return summary;
  }

  /**
   * Get player state and learning progress
   */
  getPlayerProfile() {
    return this.gameState.getPersistent();
  }

  /**
   * Recommend remediation practice if weak competencies are detected
   */
  getRemedialRecommendations() {
    const persistent = this.gameState.getPersistent();
    return RemediationSelector.findWeakCompetencies(persistent.mastery);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Game };
} else if (typeof window !== 'undefined') {
  window.RPG_Game = { Game };
}
