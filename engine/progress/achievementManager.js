/**
 * Achievement Manager
 * Checks milestones and unlocks player achievements upon session completion.
 */
class AchievementManager {
  static evaluateAchievements(session, playerPersistent) {
    const unlockedNow = [];
    const existing = new Set(playerPersistent.achievements || []);

    const isVictory = session.battle_status === 'VICTORY';
    const accuracy = session.answers_log.length > 0
      ? session.answers_log.filter(a => a.is_correct).length / session.answers_log.length
      : 0;

    // 1. First Mission Complete
    if (isVictory && !existing.has('FIRST_MISSION_COMPLETE')) {
      unlockedNow.push({
        id: 'FIRST_MISSION_COMPLETE',
        title: 'Langkah Pertama Pejuang',
        description: 'Menyelesaikan misi pertempuran pertama dengan sukses.'
      });
    }

    // 2. Perfect Streak
    if (isVictory && accuracy === 1.0 && session.answers_log.length >= 4 && !existing.has('PERFECT_ACCURACY')) {
      unlockedNow.push({
        id: 'PERFECT_ACCURACY',
        title: 'Ketajaman Absolut',
        description: 'Menjawab seluruh pertanyaan misi dengan benar tanpa kesalahan.'
      });
    }

    // 3. Combo Master
    if (session.max_combo >= 4 && !existing.has('COMBO_STRIKER')) {
      unlockedNow.push({
        id: 'COMBO_STRIKER',
        title: 'Ahli Rangkaian Taktis',
        description: 'Mencapai rentetan combo 4 kali berturut-turut.'
      });
    }

    return unlockedNow;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AchievementManager };
} else if (typeof window !== 'undefined') {
  window.RPG_AchievementManager = { AchievementManager };
}
