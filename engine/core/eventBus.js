/**
 * Engine Core EventBus
 * Decoupled publish/subscribe event dispatcher for cross-module communication.
 */
class EventBus {
  constructor() {
    this.listeners = new Map();
  }

  /**
   * Register a listener for an event
   * @param {string} event 
   * @param {Function} handler 
   */
  on(event, handler) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(handler);
    return () => this.off(event, handler);
  }

  /**
   * Unregister a listener
   * @param {string} event 
   * @param {Function} handler 
   */
  off(event, handler) {
    if (!this.listeners.has(event)) return;
    const list = this.listeners.get(event).filter(h => h !== handler);
    if (list.length === 0) {
      this.listeners.delete(event);
    } else {
      this.listeners.set(event, list);
    }
  }

  /**
   * Emit an event to all registered listeners
   * @param {string} event 
   * @param {any} payload 
   */
  emit(event, payload) {
    if (!this.listeners.has(event)) return;
    const handlers = [...this.listeners.get(event)];
    for (const handler of handlers) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[EventBus] Error in listener for event "${event}":`, err);
      }
    }
  }

  /**
   * Clear all registered listeners
   */
  clear() {
    this.listeners.clear();
  }
}

// Singleton instance for global engine bus
const defaultBus = new EventBus();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EventBus, defaultBus };
} else if (typeof window !== 'undefined') {
  window.RPG_EventBus = { EventBus, defaultBus };
}
