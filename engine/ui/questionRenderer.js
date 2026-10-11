/**
 * Question Renderer (Presentation Layer)
 * Formats question data into clean semantic HTML markup.
 * Strictly adheres to rule: only formats data and handles input events,
 * never reads JSON files directly or calculates scores/mastery.
 */

class QuestionRenderer {
  /**
   * Render question card markup
   * @param {Object} question - normalized question from session
   * @param {number} roundNumber - current round index (1-based)
   * @param {number} totalQuestions - total rounds in mission
   * @returns {string} HTML string
   */
  static renderQuestionCard(question, roundNumber = 1, totalQuestions = 5) {
    if (!question) return '<div class="question-error">Tidak ada data soal</div>';

    const diffBadgeClass = `badge-${question.difficulty_label || 'medium'}`;
    const optionsHtml = (question.options || []).map(opt => `
      <button class="quiz-option-btn" data-option="${opt.id}" id="opt-${opt.id}">
        <span class="opt-key">${opt.id}</span>
        <span class="opt-text">${this.escapeHtml(opt.text)}</span>
      </button>
    `).join('');

    return `
      <div class="quiz-card" id="quiz-card-${question.question_id}">
        <div class="quiz-card-header">
          <div class="quiz-meta-left">
            <span class="quiz-round-indicator">Ronde ${roundNumber} / ${totalQuestions}</span>
            <span class="quiz-competency-tag">${this.escapeHtml(question.primary_competency)}</span>
          </div>
          <div class="quiz-meta-right">
            <span class="quiz-diff-badge ${diffBadgeClass}">${(question.difficulty_label || 'medium').toUpperCase()}</span>
          </div>
        </div>
        <div class="quiz-prompt">
          <p>${this.escapeHtml(question.question).replace(/\n/g, '<br>')}</p>
        </div>
        <div class="quiz-options-container">
          ${optionsHtml}
        </div>
      </div>
    `;
  }

  /**
   * Render explanation after turn completion
   * @param {Object} turnResult 
   * @returns {string}
   */
  static renderExplanation(turnResult) {
    const isCorrect = turnResult.isCorrect;
    const bannerClass = isCorrect ? 'banner-correct' : 'banner-wrong';
    const title = isCorrect ? 'Jawaban Tepat!' : 'Belum Tepat';

    return `
      <div class="explanation-box ${bannerClass}">
        <div class="exp-title"><strong>${title}</strong> (Kunci: ${turnResult.correctAnswer})</div>
        <div class="exp-body">${this.escapeHtml(turnResult.explanation || 'Tidak ada penjelasan khusus.')}</div>
        <button class="exp-next-btn" id="btn-next-round">Lanjut Ronde Berikutnya &rarr;</button>
      </div>
    `;
  }

  static escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuestionRenderer };
} else if (typeof window !== 'undefined') {
  window.RPG_QuestionRenderer = { QuestionRenderer };
}
