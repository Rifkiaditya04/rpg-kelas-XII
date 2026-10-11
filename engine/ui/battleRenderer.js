/**
 * Battle Renderer (Presentation Layer)
 * Formats the RPG battle interface, enemy/player HP bars, and combo streak HUD.
 */

class BattleRenderer {
  /**
   * Render top Battle Status HUD
   * @param {Object} session - active battle session state
   * @returns {string} HTML string
   */
  static renderBattleHud(session) {
    if (!session) return '';

    const playerPercent = Math.max(0, Math.min(100, Math.round((session.player_hp / session.player_max_hp) * 100)));
    const enemyPercent = Math.max(0, Math.min(100, Math.round((session.enemy_hp / session.enemy_max_hp) * 100)));
    const comboActive = session.combo > 1;

    return `
      <div class="battle-hud-container" id="battle-hud">
        <!-- Player Card -->
        <div class="hud-character-card player-hud">
          <div class="char-header">
            <span class="char-name">Ksatria Siswa</span>
            <span class="char-hp-numeric">${session.player_hp} / ${session.player_max_hp}</span>
          </div>
          <div class="hp-bar-outer">
            <div class="hp-bar-inner player-hp-fill" style="width: ${playerPercent}%"></div>
          </div>
        </div>

        <!-- Combo Streak Banner -->
        <div class="hud-combo-meter ${comboActive ? 'combo-active' : ''}">
          <span class="combo-number">${session.combo}x</span>
          <span class="combo-label">COMBO</span>
        </div>

        <!-- Enemy Card -->
        <div class="hud-character-card enemy-hud">
          <div class="char-header">
            <span class="char-name">${session.enemy_name || 'Penjaga'}</span>
            <span class="char-hp-numeric">${session.enemy_hp} / ${session.enemy_max_hp}</span>
          </div>
          <div class="hp-bar-outer">
            <div class="hp-bar-inner enemy-hp-fill" style="width: ${enemyPercent}%"></div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render floating damage popup string
   */
  static renderDamageFloater(damage, isEnemy = true) {
    const targetClass = isEnemy ? 'damage-on-enemy' : 'damage-on-player';
    return `<div class="damage-floater ${targetClass}">-${damage}</div>`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BattleRenderer };
} else if (typeof window !== 'undefined') {
  window.RPG_BattleRenderer = { BattleRenderer };
}
