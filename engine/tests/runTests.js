/**
 * Master Engine Test Runner
 * Executes all unit and integration test suites and generates a test report.
 */
const fs = require('fs');
const path = require('path');

const { runQuestionSelectorTests } = require('./unit/questionSelector.test');
const { runMasteryCalculatorTests } = require('./unit/masteryCalculator.test');
const { runDamageResolverTests } = require('./unit/damageResolver.test');
const { runCooldownManagerTests } = require('./unit/cooldownManager.test');
const { runMissionFlowIntegrationTests } = require('./integration/missionFlow.test');
const { runPoolRecipeIntegrationTests } = require('./integration/poolRecipeIntegration.test');

const REPORT_FILE = path.join(__dirname, '..', '..', 'missions', 'engine_test_report.json');

console.log('======================================================');
console.log('  RUNNING FULL TAHAP 8 ENGINE TEST SUITE');
console.log('======================================================\n');

const testSuiteResults = {
  timestamp: new Date().toISOString(),
  runner: 'Tahap 8 Master Engine Test Runner',
  overall_status: 'PASS',
  suites: []
};

function executeSuite(name, fn) {
  try {
    fn();
    testSuiteResults.suites.push({ name, status: 'PASS' });
  } catch (err) {
    console.error(`❌ FAILED: ${name}`);
    console.error(err);
    testSuiteResults.suites.push({ name, status: 'FAIL', error: err.message });
    testSuiteResults.overall_status = 'FAIL';
  }
}

// 1. Unit Tests
executeSuite('Unit: questionSelector', runQuestionSelectorTests);
executeSuite('Unit: masteryCalculator', runMasteryCalculatorTests);
executeSuite('Unit: damageResolver', runDamageResolverTests);
executeSuite('Unit: cooldownManager', runCooldownManagerTests);

// 2. Integration Tests
executeSuite('Integration: missionFlow', runMissionFlowIntegrationTests);
executeSuite('Integration: poolRecipeIntegration', runPoolRecipeIntegrationTests);

// 3. Save Report
fs.writeFileSync(REPORT_FILE, JSON.stringify(testSuiteResults, null, 2), 'utf-8');

console.log('======================================================');
console.log(`TEST SUITE FINISHED: ${testSuiteResults.overall_status}`);
console.log(`Report written to: ${REPORT_FILE}`);
console.log('======================================================');

if (testSuiteResults.overall_status !== 'PASS') {
  process.exit(1);
} else {
  process.exit(0);
}
