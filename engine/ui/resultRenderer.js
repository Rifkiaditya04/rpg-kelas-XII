/**
 * Result Renderer (Presentation Layer)
 * Formats end-of-mission summary modal, statistics, and achievement badges.
 */

class ResultRenderer {
  /**
   * Render Mission Clear / Defeat Modal
   * @param {Object} summary - session summary from sessionManager
   * @param {Object} persistent - updated player profile
   * @returns {string} HTML string
   */
  static renderResultModal(summary, persistent = {}) {
    if (!summary) return '';

    const isVictory = summary.battle_status === 'VICTORY';
    const statusHeader = isVictory ? 'MISI BERHASIL DISELESAIKAN!' : 'MISI GAGAL!';
    const statusClass = isVictory ? 'modal-victory' : 'modal-defeat';

    return `
      <div class="result-modal-backdrop" id="result-modal">
        <div class="result-modal-card ${statusClass}">
          <div class="result-header">
            <h2 class="result-title">${statusHeader}</h2>
            <p class="result-subtitle">${summary.mission_name || 'Misi Selesai'}</p>
          </div>

          <div class="result-stats-grid">
            <div class="stat-box">
              <span class="stat-label">Akurasi Jawaban</span>
              <span class="stat-value">${summary.accuracy_percent}%</span>
              <span class="stat-detail">(${summary.correct_count} dari ${summary.answered_count} soal)</span>
            </div>

            <div class="stat-box">
              <span class="stat-label">Total XP Didapat</span>
              <span class="stat-value text-gold">+${summary.total_xp_gained} XP</span>
              <span class="stat-detail">Level Sekarang: ${persistent.level || 12}</span>
            </div>

            <div class="stat-box">
              <span class="stat-label">Rentetan Combo Puncak</span>
              <span class="stat-value text-accent">${summary.max_combo}x</span>
              <span class="stat-detail">Kerusakan Maksimal</span>
            </div>

            <div class="stat-box">
              <span class="stat-label">Total Kerusakan</span>
              <span class="stat-value text-crimson">${summary.total_damage_dealt} DMG</span>
              <span class="stat-detail">Serangan Efektif</span>
            </div>
          </div>

          <div class="result-actions">
            <button class="btn-action btn-secondary" id="btn-replay-mission">Ulangi Misi</button>
            <button class="btn-action btn-primary" id="btn-back-to-map">Kembali ke Peta Materi</button>
          </div>
        </div>
      </div>
    `;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ResultRenderer };
} else if (typeof window !== 'undefined') {
  window.RPG_ResultRenderer = { ResultRenderer };
}
