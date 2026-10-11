param(
    [string]$BaseDir = "d:\Disk D\PROJECT GAME\Proyek Game Kelas XII\rpg-kelas-XII"
)

$poolsDir = Join-Path $BaseDir "phase-4-pools"
$missionsDir = Join-Path $BaseDir "missions"
$techReportFile = Join-Path $missionsDir "recipe_validation_report.json"
$pedReportFile = Join-Path $missionsDir "learning_curve_report.json"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host " TAHAP 7E: TWO-LAYER RECIPE & LEARNING CURVE VALIDATOR" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

# 1. Load Competency Map
$compMapFile = Join-Path $poolsDir "competency_map.json"
if (-not (Test-Path $compMapFile)) {
    Write-Error "Competency map not found at $compMapFile"
    exit 1
}
$compMapRaw = Get-Content -Path $compMapFile -Raw
$compMap = $compMapRaw | ConvertFrom-Json

$validComps = @{}
foreach ($subj in $compMap.subjects) {
    foreach ($chap in $subj.chapters) {
        foreach ($comp in $chap.competencies) {
            $validComps[$comp.competency_id] = $subj.subject
        }
    }
}

# 2. Pre-load all pool questions to count availability per competency and difficulty
$poolData = @{}
$poolDirs = Get-ChildItem -Path $poolsDir -Directory
foreach ($pDir in $poolDirs) {
    $pFiles = Get-ChildItem -Path $pDir.FullName -Filter "*.json" -File
    foreach ($pF in $pFiles) {
        try {
            $raw = Get-Content -Path $pF.FullName -Raw
            $pContent = $raw | ConvertFrom-Json
            if ($null -ne $pContent.questions) {
                foreach ($q in $pContent.questions) {
                    $c = $q.primary_competency
                    $d = $q.difficulty_label
                    if (-not $poolData.ContainsKey($c)) {
                        $poolData[$c] = @{ easy = 0; medium = 0; hard = 0 }
                    }
                    if ($poolData[$c].ContainsKey($d)) {
                        $poolData[$c][$d]++
                    }
                }
            }
        } catch {}
    }
}

# 3. Locate all recipe files
$recipeFiles = Get-ChildItem -Path $missionsDir -Filter "*.json" -Recurse -File | Where-Object { $_.Name -notmatch "report" }

$techReport = @{
    layer = "Technical Validation"
    timestamp = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssZ")
    total_recipes = 0
    valid_recipes = 0
    invalid_recipes = 0
    errors = @()
    warnings = @()
}

$pedReport = @{
    layer = "Pedagogical Validation (Learning Curve & Scaffolding)"
    timestamp = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ssZ")
    total_recipes = 0
    pass_count = 0
    fail_count = 0
    content_gaps = @()
    evaluations = @()
}

$seenIds = @{}

foreach ($rFile in $recipeFiles) {
    $techReport.total_recipes++
    $pedReport.total_recipes++
    
    $isTechValid = $true
    $isPedValid = $true
    
    $recipe = $null
    try {
        $rRaw = Get-Content -Path $rFile.FullName -Raw
        $recipe = $rRaw | ConvertFrom-Json
    } catch {
        $techReport.errors += @{ file = $rFile.Name; error = "invalid_json" }
        $techReport.invalid_recipes++
        $pedReport.fail_count++
        continue
    }
    
    $mId = $recipe.mission_id
    if (-not $mId) {
        $techReport.errors += @{ file = $rFile.Name; error = "missing_mission_id" }
        $isTechValid = $false
        $mId = "UNKNOWN_ID"
    } else {
        if ($seenIds.ContainsKey($mId)) {
            $techReport.errors += @{ mission_id = $mId; error = "duplicate_mission_id" }
            $isTechValid = $false
        }
        $seenIds[$mId] = $true
    }
    
    # --- LAYER 1: TECHNICAL CHECKS ---
    if (-not $recipe.mission_name) {
        $techReport.errors += @{ mission_id = $mId; error = "empty_mission_name" }
        $isTechValid = $false
    }
    
    if (-not $recipe.question_count -or $recipe.question_count -le 0) {
        $techReport.errors += @{ mission_id = $mId; error = "invalid_question_count" }
        $isTechValid = $false
    }
    
    $dd = $recipe.selection_rule.difficulty_distribution
    $totalDiff = ($dd.easy + $dd.medium + $dd.hard)
    if ($totalDiff -ne $recipe.question_count) {
        $techReport.errors += @{ mission_id = $mId; error = "difficulty_sum_mismatch"; requested = $totalDiff; required = $recipe.question_count }
        $isTechValid = $false
    }
    
    $cw = $recipe.selection_rule.competency_weights
    $totalWeight = 0
    $reqComps = @()
    foreach ($w in $cw) {
        $totalWeight += $w.weight
        $reqComps += $w.competency_id
        if (-not $validComps.ContainsKey($w.competency_id)) {
            $techReport.errors += @{ mission_id = $mId; error = "unknown_competency"; competency = $w.competency_id }
            $isTechValid = $false
        }
    }
    
    if ([math]::Abs($totalWeight - 1.0) -gt 0.05) {
        $techReport.errors += @{ mission_id = $mId; error = "invalid_weight_sum"; sum = $totalWeight }
        $isTechValid = $false
    }
    
    $availEasy = 0; $availMed = 0; $availHard = 0;
    foreach ($c in $reqComps) {
        if ($poolData.ContainsKey($c)) {
            $availEasy += $poolData[$c].easy
            $availMed += $poolData[$c].medium
            $availHard += $poolData[$c].hard
        }
    }
    
    if ($availHard -lt $dd.hard) {
        $techReport.errors += @{ mission_id = $mId; error = "requested_hard_count_exceeds_available_pool"; requested = $dd.hard; available = $availHard }
        $isTechValid = $false
    }
    if ($availMed -lt $dd.medium) {
        $techReport.errors += @{ mission_id = $mId; error = "requested_medium_count_exceeds_available_pool"; requested = $dd.medium; available = $availMed }
        $isTechValid = $false
    }
    if ($availEasy -lt $dd.easy) {
        $techReport.errors += @{ mission_id = $mId; error = "requested_easy_count_exceeds_available_pool"; requested = $dd.easy; available = $availEasy }
        $isTechValid = $false
    }
    
    $fb = $recipe.selection_rule.fallback
    if (-not $fb -or -not $fb.if_hard_unavailable -or -not $fb.if_medium_unavailable -or -not $fb.if_easy_unavailable) {
        $techReport.errors += @{ mission_id = $mId; error = "invalid_fallback_rules"; details = "Must specify if_easy_unavailable, if_medium_unavailable, if_hard_unavailable" }
        $isTechValid = $false
    }
    
    if ($isTechValid) {
        $techReport.valid_recipes++
    } else {
        $techReport.invalid_recipes++
    }
    
    # --- LAYER 2: PEDAGOGICAL VALIDATION (LEARNING CURVE & SCAFFOLDING) ---
    $validMissionTypes = @("introduction", "guided_learning", "reinforcement", "integration", "mini_boss", "boss", "remedial", "tka_simulation")
    $mType = $recipe.mission_type
    
    $pedIssues = @()
    if (-not $mType -or $validMissionTypes -notcontains $mType) {
        $pedIssues += "invalid_or_missing_mission_type"
        $isPedValid = $false
    }
    
    $hardRatio = if ($recipe.question_count -gt 0) { [math]::Round(($dd.hard / $recipe.question_count), 2) } else { 0 }
    $easyRatio = if ($recipe.question_count -gt 0) { [math]::Round(($dd.easy / $recipe.question_count), 2) } else { 0 }
    
    # Policy checks based on mission type
    if ($mType -in @("introduction", "guided_learning")) {
        # Check minimum warm-up
        if ($dd.easy -lt 1) {
            $pedIssues += "missing_warmup_easy_questions (easy must be >= 1)"
            $isPedValid = $false
        }
        if ($hardRatio -gt 0.4) {
            $pedIssues += "hard_ratio_too_high ($hardRatio > 0.4)"
            $isPedValid = $false
        }
        # Check if content gap exists in pool
        if ($availEasy -lt $dd.easy -or $availEasy -eq 0) {
            $gap = @{
                status = "content_gap"
                mission_id = $mId
                mission_type = $mType
                error = "minimum_easy_question_unavailable"
                required_action = "produce_easy_questions_or_change_mission_type"
                available_easy = $availEasy
                requested_easy = $dd.easy
            }
            $pedReport.content_gaps += $gap
            $isPedValid = $false
        }
    } elseif ($mType -eq "reinforcement") {
        if ($dd.medium -lt $dd.easy) {
            $pedIssues += "medium_should_be_gte_easy"
            $isPedValid = $false
        }
        if ($hardRatio -gt 0.5) {
            $pedIssues += "hard_ratio_too_high_for_reinforcement ($hardRatio > 0.5)"
            $isPedValid = $false
        }
    } elseif ($mType -eq "remedial") {
        if ($easyRatio -lt 0.5) {
            $pedIssues += "easy_ratio_too_low_for_remedial ($easyRatio < 0.5)"
            $isPedValid = $false
        }
        if ($dd.hard -gt 0) {
            $pedIssues += "remedial_must_not_contain_hard"
            $isPedValid = $false
        }
    }
    
    $evalRecord = @{
        mission_id = $mId
        mission_name = $recipe.mission_name
        mission_type = $mType
        question_count = $recipe.question_count
        difficulty_distribution = $dd
        metrics = @{
            easy_ratio = $easyRatio
            hard_ratio = $hardRatio
            warmup_satisfaction = ($dd.easy -ge 1)
            pool_easy_available = $availEasy
            pool_medium_available = $availMed
            pool_hard_available = $availHard
        }
        status = if ($isPedValid) { "PASS" } else { "FAIL" }
        pedagogical_issues = $pedIssues
    }
    $pedReport.evaluations += $evalRecord
    
    if ($isPedValid) {
        $pedReport.pass_count++
    } else {
        $pedReport.fail_count++
    }
}

# 4. Save Reports
$techReport | ConvertTo-Json -Depth 6 | Out-File -FilePath $techReportFile -Encoding UTF8
$pedReport | ConvertTo-Json -Depth 6 | Out-File -FilePath $pedReportFile -Encoding UTF8

Write-Host "`n[Layer 1: Technical Validation]" -ForegroundColor Yellow
Write-Host "Total Recipes   : $($techReport.total_recipes)"
Write-Host "Valid Recipes   : $($techReport.valid_recipes)"
Write-Host "Invalid Recipes : $($techReport.invalid_recipes)"
if ($techReport.errors.Count -gt 0) {
    Write-Host "Errors:" -ForegroundColor Red
    $techReport.errors | ForEach-Object { Write-Host " - $($_.mission_id): $($_.error)" -ForegroundColor Red }
}

Write-Host "`n[Layer 2: Pedagogical & Learning Curve Validation]" -ForegroundColor Yellow
Write-Host "Total Evaluated : $($pedReport.total_recipes)"
Write-Host "PASS            : $($pedReport.pass_count)"
Write-Host "FAIL            : $($pedReport.fail_count)"
Write-Host "Content Gaps    : $($pedReport.content_gaps.Count)"
if ($pedReport.content_gaps.Count -gt 0) {
    Write-Host "Content Gaps Detected:" -ForegroundColor Red
    $pedReport.content_gaps | ForEach-Object { Write-Host " - $($_.mission_id): $($_.error) (Action: $($_.required_action))" -ForegroundColor Red }
}

Write-Host "`nReports saved to:" -ForegroundColor Green
Write-Host " - $techReportFile"
Write-Host " - $pedReportFile"

if ($techReport.invalid_recipes -eq 0 -and $pedReport.fail_count -eq 0) {
    Write-Host "`n*** GLOBAL STATUS: FULL PASS (Technical and Pedagogical) ***" -ForegroundColor Green
    exit 0
} else {
    Write-Host "`n*** GLOBAL STATUS: CONDITIONAL / FAILED ***" -ForegroundColor Red
    exit 1
}
