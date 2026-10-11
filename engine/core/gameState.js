/**
 * Engine Core GameState
 * Implements finite state machine for game modes and strict separation
 * between ephemeral session state and serializable persistent player state.
 */

const GameStates = Object.freeze({
  MENU: 'MENU',
  MISSION_SELECT: 'MISSION_SELECT',
  STORY_DIALOG: 'STORY_DIALOG',
  BATTLE: 'BATTLE',
  RESULT: 'RESULT',
  MAP: 'MAP',
  TKA_SIMULATION: 'TKA_SIMULATION'
});

const AllowedTransitions = {
  [GameStates.MENU]: [GameStates.MISSION_SELECT, GameStates.MAP, GameStates.STORY_DIALOG, GameStates.BATTLE],
  [GameStates.MISSION_SELECT]: [GameStates.STORY_DIALOG, GameStates.BATTLE, GameStates.MENU, GameStates.MAP],
  [GameStates.STORY_DIALOG]: [GameStates.BATTLE, GameStates.MISSION_SELECT],
  [GameStates.BATTLE]: [GameStates.RESULT],
  [GameStates.RESULT]: [GameStates.MAP, GameStates.MISSION_SELECT, GameStates.MENU, GameStates.BATTLE],
  [GameStates.MAP]: [GameStates.MISSION_SELECT, GameStates.MENU, GameStates.TKA_SIMULATION, GameStates.STORY_DIALOG, GameStates.BATTLE],
  [GameStates.TKA_SIMULATION]: [GameStates.RESULT, GameStates.MAP]
};

class GameStateManager {
  constructor(eventBus = null) {
    this.eventBus = eventBus;
    this.currentState = GameStates.MENU;

    // Ephemeral session state (lives only during a mission)
    this.session = null;

    // Persistent player state (survives game restart)
    this.persistent = this.createDefaultPersistentState();
  }

  createDefaultPersistentState() {
    return {
      player_id: 'PLAYER-001',
      level: 12,
      xp: 0,
      gold: 100,
      mastery: {},     // { [competencyId]: float 0.0 - 1.0 }
      cooldowns: {},   // { [questionId]: remainingSessions }
      achievements: [],// [ "FIRST_BLOOD", ... ]
      completed_missions: []
    };
  }

  getState() {
    return this.currentState;
  }

  transition(targetState, context = {}) {
    const validNextStates = AllowedTransitions[this.currentState] || [];
    if (!validNextStates.includes(targetState)) {
      throw new Error(`[GameState] Invalid state transition from "${this.currentState}" to "${targetState}"`);
    }

    const previousState = this.currentState;
    this.currentState = targetState;

    if (this.eventBus) {
      this.eventBus.emit('state:changed', {
        from: previousState,
        to: targetState,
        context
      });
    }

    return this.currentState;
  }

  // --- Session State Management ---
  startSession(sessionInitData) {
    this.session = sessionInitData;
    this.session.current_question_index = this.session.current_question_index || 0;
    this.session.answers_log = this.session.answers_log || [];
    this.session.battle_status = this.session.battle_status || 'IN_PROGRESS';

    if (this.eventBus) {
      this.eventBus.emit('session:started', this.session);
    }
    return this.session;
  }

  getSession() {
    return this.session;
  }

  clearSession() {
    const closedSession = this.session;
    this.session = null;
    return closedSession;
  }

  // --- Persistent State Management ---
  getPersistent() {
    return this.persistent;
  }

  loadPersistent(savedData) {
    if (!savedData) return;
    this.persistent = {
      ...this.createDefaultPersistentState(),
      ...savedData,
      mastery: { ...(savedData.mastery || {}) },
      cooldowns: { ...(savedData.cooldowns || {}) },
      achievements: [...(savedData.achievements || [])],
      completed_missions: [...(savedData.completed_missions || [])]
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GameStates, GameStateManager };
} else if (typeof window !== 'undefined') {
  window.RPG_GameState = { GameStates, GameStateManager };
}
