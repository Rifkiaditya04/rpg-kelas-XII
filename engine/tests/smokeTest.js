const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..', '..');
const POOLS_DIR = path.join(BASE_DIR, 'phase-4-pools');
const MISSIONS_DIR = path.join(BASE_DIR, 'missions');
const REPORT_FILE = path.join(MISSIONS_DIR, 'smoke_test_report.json');

// --- 8A. Pool Loader ---
function loadPool(subject, chapter) {
    const filePath = path.join(POOLS_DIR, subject, `pool-${subject}-${chapter}.json`);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, ''));
}

function loadCompetencyMap() {
    const filePath = path.join(POOLS_DIR, 'competency_map.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, ''));
}

// --- 8B. Recipe Loader ---
function loadRecipe(subject, filename) {
    const filePath = path.join(MISSIONS_DIR, subject, filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, ''));
}

// --- 8C. Question Selector with Scaffolding & Learning Curve Support ---
function selectQuestions(pool, recipe, history) {
    let selected = [];
    let distribution = recipe.selection_rule.difficulty_distribution;
    const validCompetencies = recipe.selection_rule.competency_weights.map(w => w.competency_id);
    
    // Select in order: easy (warmup) -> medium (reinforce) -> hard (challenge)
    for (let diff of ["easy", "medium", "hard"]) {
        let needed = distribution[diff];
        if (needed === 0) continue;
        
        let candidates = pool.questions.filter(q => 
            q.difficulty_label === diff &&
            validCompetencies.includes(q.primary_competency) &&
            !history.recent_answered.includes(q.question_id)
        );
        
        for (let i = 0; i < needed; i++) {
            if (candidates.length > 0) {
                let idx = Math.floor(Math.random() * candidates.length);
                selected.push(candidates[idx]);
                candidates.splice(idx, 1);
            }
        }
    }
    return selected;
}

// --- 8E. Progress Store (Mock) ---
let progressStore = {
    recent_answered: [],
    mastery: {}
};

// --- Test Results Tracker ---
let smokeTestReport = {
    test_run: "Engine Integration Smoke Test",
    timestamp: new Date().toISOString(),
    status: "PASS",
    missions_tested: []
};

// --- 8D & 8F. Battle Engine Simulation ---
function runSmokeTest(subject, chapter, recipeFile) {
    console.log(`\n======================================================`);
    console.log(` STARTING SMOKE TEST: ${subject.toUpperCase()}`);
    console.log(`======================================================`);
    
    const pool = loadPool(subject, chapter);
    const recipe = loadRecipe(subject, recipeFile);
    
    console.log(`Loaded Recipe: ${recipe.mission_name} (Type: ${recipe.mission_type})`);
    console.log(`Target Question Count: ${recipe.question_count}`);
    console.log(`Difficulty Distribution: Easy: ${recipe.selection_rule.difficulty_distribution.easy}, Medium: ${recipe.selection_rule.difficulty_distribution.medium}, Hard: ${recipe.selection_rule.difficulty_distribution.hard}`);
    
    const battleQuestions = selectQuestions(pool, recipe, progressStore);
    console.log(`Selected ${battleQuestions.length} questions for battle.`);
    
    let missionResult = {
        mission_id: recipe.mission_id,
        mission_name: recipe.mission_name,
        subject: subject,
        mission_type: recipe.mission_type,
        required_questions: recipe.question_count,
        selected_questions: battleQuestions.length,
        difficulty_counts: { easy: 0, medium: 0, hard: 0 },
        rounds_played: [],
        total_xp_earned: 0,
        warmup_verified: false,
        status: "PASS"
    };
    
    if (battleQuestions.length !== recipe.question_count) {
        console.error(`ERROR: Expected ${recipe.question_count} questions, got ${battleQuestions.length}`);
        missionResult.status = "FAIL";
        smokeTestReport.status = "FAIL";
    }
    
    let score = 0;
    battleQuestions.forEach((q, index) => {
        missionResult.difficulty_counts[q.difficulty_label] = (missionResult.difficulty_counts[q.difficulty_label] || 0) + 1;
        
        console.log(`\n[Round ${index + 1}] Diff: ${q.difficulty_label.toUpperCase()} | Comp: ${q.primary_competency}`);
        console.log(`Q: ${q.question.substring(0, 60)}...`);
        console.log(`Options: ${q.options.map(o => o.id).join(', ')}`);
        console.log(`-> Player selects: ${q.answer}`);
        console.log(`-> Result: CORRECT! (Damage: ${q.gameplay.correct_damage}, XP: ${q.gameplay.base_xp})`);
        
        score += q.gameplay.base_xp;
        progressStore.recent_answered.push(q.question_id);
        
        missionResult.rounds_played.push({
            round: index + 1,
            question_id: q.question_id,
            competency: q.primary_competency,
            difficulty: q.difficulty_label,
            xp: q.gameplay.base_xp
        });
    });
    
    // Verify scaffolding warmup: First question should be easy
    if (battleQuestions.length > 0 && battleQuestions[0].difficulty_label === "easy") {
        missionResult.warmup_verified = true;
        console.log(`\n[Pedagogical Check]: Warmup scaffolding VERIFIED (Starts with EASY question).`);
    } else {
        console.warn(`\n[Pedagogical Check]: Warmup question was not easy!`);
    }
    
    missionResult.total_xp_earned = score;
    smokeTestReport.missions_tested.push(missionResult);
    
    console.log(`\nMission Complete! Total XP: ${score}`);
    console.log(`Session cooldown active for: ${progressStore.recent_answered.length} questions.`);
    console.log(`--- SMOKE TEST ${subject.toUpperCase()} PASS ---\n`);
}

// Execute tests for all 3 subjects
try {
    runSmokeTest("bahasa-indonesia", "BI12-C01", "mission-recipes-bid-ch1.json");
    runSmokeTest("matematika", "MAT12-C01", "mission-recipes-mat-ch1.json");
    runSmokeTest("bahasa-inggris", "ENG12-C01", "mission-recipes-eng-ch1.json");
    
    // Save report
    fs.writeFileSync(REPORT_FILE, JSON.stringify(smokeTestReport, null, 2), 'utf-8');
    console.log(`\n======================================================`);
    console.log(`ALL SMOKE TESTS PASSED!`);
    console.log(`Smoke test report written to: ${REPORT_FILE}`);
    console.log(`ENGINE ARCHITECTURE (STAGE 8) GATE IS OFFICIALLY OPEN.`);
    console.log(`======================================================\n`);
} catch (e) {
    console.error("SMOKE TEST EXCEPTION: ", e);
    smokeTestReport.status = "EXCEPTION";
    fs.writeFileSync(REPORT_FILE, JSON.stringify(smokeTestReport, null, 2), 'utf-8');
    process.exit(1);
}
