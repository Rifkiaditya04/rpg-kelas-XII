/**
 * Competency Map Loader
 * Reads competency_map.json and builds fast index lookups for subject-chapter-competency relations.
 */
const fs = require('fs');
const path = require('path');
const Config = require('../../core/config');

function loadCompetencyMap(customBaseDir = null) {
  const base = customBaseDir || Config.paths.poolsDir;
  const filePath = path.join(base, 'competency_map.json');

  if (!fs.existsSync(filePath)) {
    throw new Error(`[CompetencyMapLoader] File not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '').trim();
  const data = JSON.parse(raw);

  const byId = new Map();
  const bySubject = new Map();

  for (const subj of (data.subjects || [])) {
    const sName = subj.subject;
    if (!bySubject.has(sName)) {
      bySubject.set(sName, []);
    }

    for (const chap of (subj.chapters || [])) {
      for (const comp of (chap.competencies || [])) {
        const record = {
          competency_id: comp.competency_id,
          name: comp.name,
          subject: sName,
          chapter_id: chap.chapter_id,
          chapter_name: chap.chapter_name
        };
        byId.set(comp.competency_id, record);
        bySubject.get(sName).push(record);
      }
    }
  }

  return {
    raw: data,
    getCompetency: (id) => byId.get(id) || null,
    hasCompetency: (id) => byId.has(id),
    getCompetenciesBySubject: (subj) => bySubject.get(subj) || [],
    totalCompetencies: byId.size
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { loadCompetencyMap };
} else if (typeof window !== 'undefined') {
  window.RPG_CompetencyMapLoader = { loadCompetencyMap };
}
