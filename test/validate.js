// validate.js — Automated test suite for portfolio project
// Tests run as part of the CI pipeline to verify project integrity

const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
let total = 0;

function test(description, fn) {
  total++;
  try {
    fn();
    passed++;
    console.log(`  ✓ ${description}`);
  } catch (error) {
    failed++;
    console.error(`  ✗ ${description}`);
    console.error(`    Error: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

console.log('\n🧪 Running project validation tests...\n');

// Test 1: Project structure
test('Project root contains index.html', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'index.html')), 'index.html not found');
});

test('Project root contains package.json', () => {
  assert(fs.existsSync(path.join(__dirname, '..', 'package.json')), 'package.json not found');
});

test('.github/workflows directory exists with CI/CD config', () => {
  const workflowPath = path.join(__dirname, '..', '.github', 'workflows');
  assert(fs.existsSync(workflowPath), 'Workflow directory not found');
  const files = fs.readdirSync(workflowPath);
  assert(files.length > 0, 'No workflow files found');
});

// Test 2: HTML content validation
test('index.html has valid HTML5 doctype', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('<!DOCTYPE html>'), 'Missing HTML5 doctype');
});

test('index.html has proper meta viewport tag', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('viewport'), 'Missing viewport meta tag');
});

test('index.html contains name "Udit Prasad"', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('Udit Prasad'), 'Name not found in HTML');
});

test('index.html contains email link', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('uditprasad32@gmail.com'), 'Email not found');
});

test('index.html contains LinkedIn profile link', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  assert(html.includes('linkedin.com/in/uditprasad32'), 'LinkedIn not found');
});

// Test 3: Package.json validation
test('package.json has required scripts', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(pkg.scripts && pkg.scripts.test, 'Missing test script');
  assert(pkg.scripts && pkg.scripts.build, 'Missing build script');
  assert(pkg.scripts && pkg.scripts.lint, 'Missing lint script');
});

test('package.json has correct project name', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(pkg.name === 'udit-portfolio-cicd', 'Incorrect project name');
});

// Test 4: CI/CD workflow validation
test('CI/CD workflow has lint job', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('lint:'), 'Missing lint job');
});

test('CI/CD workflow has test job', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('test:'), 'Missing test job');
});

test('CI/CD workflow has build job', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('build:'), 'Missing build job');
});

test('CI/CD workflow has deploy job', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('deploy:'), 'Missing deploy job');
});

test('CI/CD workflow triggers on push to main', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('push:') && workflow.includes('main'), 'Missing push trigger');
});

test('CI/CD workflow triggers on pull requests', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'ci-cd.yml'), 'utf8');
  assert(workflow.includes('pull_request:'), 'Missing PR trigger');
});

// Summary
console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed, ${total} total\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('✅ All tests passed! Project is ready for deployment.\n');
}
