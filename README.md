# CI/CD Pipeline Automation Using GitHub Actions

> **Internship Project** — DevOps Domain  
> **Duration:** 1 Month  
> **Difficulty:** Intermediate  
> **Author:** Udit Prasad  

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Setup Instructions](#setup-instructions)
7. [CI/CD Pipeline Details](#cicd-pipeline-details)
8. [Testing Strategy](#testing-strategy)
9. [Deployment Guide](#deployment-guide)
10. [Screenshots](#screenshots)
11. [Security Practices](#security-practices)
12. [Future Enhancements](#future-enhancements)

---

## Project Overview

This project implements a complete **Continuous Integration and Continuous Deployment (CI/CD) pipeline** using GitHub Actions. The application is a modern portfolio website that gets automatically built, tested, and deployed on every code push.

The pipeline simulates a real-world DevOps workflow where every code change triggers automated testing, building, and deployment operations — eliminating manual errors and reducing deployment time significantly.

### Objectives

- ✅ Automate code quality checks (linting)
- ✅ Run automated test suites on every commit
- ✅ Build the application automatically
- ✅ Deploy to a live hosting platform
- ✅ Monitor pipeline execution through logs

---

## Problem Statement

Traditional software development workflows suffer from:

- 🐌 Increased deployment time
- ❌ Human errors during manual deployment
- 🔄 Inconsistent environments between dev and production
- ⏳ Slow release cycles
- 🤝 Poor collaboration between dev and ops teams

This project solves these problems by implementing a fully automated CI/CD pipeline using GitHub Actions.

---

## Features

### CI (Continuous Integration)
| Feature | Status |
|---------|--------|
| Automatic code checkout | ✅ |
| Dependency installation | ✅ |
| Lint checks | ✅ |
| Unit & validation tests | ✅ |
| Build process | ✅ |

### CD (Continuous Deployment)
| Feature | Status |
|---------|--------|
| Auto-deploy on push to main | ✅ |
| Deployment status notification | ✅ |
| Artifact management | ✅ |

### Monitoring
| Feature | Status |
|---------|--------|
| Workflow execution logs | ✅ |
| Test results reporting | ✅ |
| Build status tracking | ✅ |

---

## Technology Stack

| Category | Technology |
|----------|------------|
| **Version Control** | Git & GitHub |
| **CI/CD Platform** | GitHub Actions |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Testing** | Node.js (Custom validation suite) |
| **Code Quality** | ESLint, HTML5 validation |
| **Package Manager** | npm |
| **Deployment** | GitHub Pages / Vercel / Netlify |

---

## Project Structure

```
udit-portfolio-cicd/
│
├── index.html                    # Main portfolio website
├── package.json                  # Project configuration & scripts
├── .github/
│   └── workflows/
│       └── ci-cd.yml             # GitHub Actions CI/CD pipeline
├── test/
│   └── validate.js               # Automated test suite
├── dist/                         # Build output directory
├── assets/                       # Static assets (images, icons)
├── README.md                     # This file
└── .gitignore                    # Ignored files
```

---

## Setup Instructions

### Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)
- Git
- A GitHub account

### Step 1: Clone the Repository

```bash
git clone https://github.com/uditprasad2903/udit-portfolio-cicd.git
cd udit-portfolio-cicd
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Tests

```bash
npm test
```

### Step 4: Build the Project

```bash
npm run build
```

### Step 5: View the Website

```bash
npm start
```
Open `index.html` in your browser.

---

## CI/CD Pipeline Details

### Pipeline Workflow

```
┌─────────────────┐     ┌──────────────┐     ┌────────────┐     ┌─────────────┐
│   Code Push     │────▶│   Lint Job   │────▶│  Test Job  │────▶│  Build Job  │
│   to GitHub     │     │  (ESLint,    │     │ (Validate  │     │  (Generate  │
│                 │     │   HTML Check)│     │   Suite)   │     │   dist/)    │
└─────────────────┘     └──────────────┘     └────────────┘     └──────┬──────┘
                                                                        │
                                                                        ▼
                                                              ┌─────────────────┐
                                                              │  Deploy Job     │
                                                              │  (Production)   │
                                                              └─────────────────┘
```

### Pipeline Stages Explained

#### Stage 1: Lint (Code Quality)
- Checks out the latest code
- Installs dependencies
- Runs ESLint for code formatting checks
- Validates HTML5 structure

#### Stage 2: Test (Automated Testing)
- Runs 16 automated validation tests
- Verifies project structure
- Validates HTML content
- Checks workflow configuration
- Reports pass/fail status

#### Stage 3: Build (Application Build)
- Creates `dist/` directory
- Copies production-ready files
- Uploads build artifacts

#### Stage 4: Deploy (Production Deployment)
- Downloads build artifacts
- Deploys to hosting platform
- Generates deployment status report

### Trigger Conditions

| Event | Action |
|-------|--------|
| Push to `main` | Full CI/CD pipeline |
| Pull Request to `main` | CI only (lint + test + build) |
| Merge to `main` | Full pipeline with deploy |

---

## Testing Strategy

### Automated Test Suite (`test/validate.js`)

The project includes a comprehensive test suite with **16 test cases** covering:

1. **Structure Tests** — Verifies all required files exist
2. **Content Tests** — Validates HTML content and personal information
3. **Configuration Tests** — Checks package.json scripts and settings
4. **Pipeline Tests** — Verifies GitHub Actions workflow configuration

### Running Tests Locally

```bash
npm test
```

### Expected Output

```
🧪 Running project validation tests...

  ✓ Project root contains index.html
  ✓ Project root contains package.json
  ✓ .github/workflows directory exists with CI/CD config
  ✓ index.html has valid HTML5 doctype
  ✓ index.html has proper meta viewport tag
  ✓ index.html contains name "Udit Prasad"
  ✓ index.html contains email link
  ✓ index.html contains LinkedIn profile link
  ✓ package.json has required scripts
  ✓ package.json has correct project name
  ✓ CI/CD workflow has lint job
  ✓ CI/CD workflow has test job
  ✓ CI/CD workflow has build job
  ✓ CI/CD workflow has deploy job
  ✓ CI/CD workflow triggers on push to main
  ✓ CI/CD workflow triggers on pull requests

📊 Test Results: 16 passed, 0 failed, 16 total

✅ All tests passed! Project is ready for deployment.
```

---

## Deployment Guide

### Option 1: GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select source as `main` branch, `/docs` or `/ (root)` folder
3. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Option 2: Vercel

1. Import the repository on [Vercel](https://vercel.com)
2. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy — Vercel will auto-deploy on every push

### Option 3: Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist/`
4. Deploy

---

## Screenshots

### GitHub Actions Pipeline

> Take screenshots of the following:
>
> 1. **Workflow runs page** — Shows all pipeline executions
> 2. **Individual job view** — Shows lint, test, build, deploy stages
> 3. **Job logs** — Shows detailed execution output
> 4. **Passing status badges** — Shows successful pipeline run
>
> To capture:
> - Go to your GitHub repository → **Actions** tab
> - Click on any workflow run
> - Take screenshots of each stage

---

## Security Practices

### Implemented Security Measures

| Practice | Implementation |
|----------|----------------|
| GitHub Secrets | Used for deployment tokens |
| No hardcoded credentials | All sensitive data in `.env` |
| Protected branches | Deploy only from `main` |
| Minimal permissions | Workflows use least-privilege access |

### Best Practices Followed

- ✅ API keys stored in GitHub Secrets, never in code
- ✅ Environment variables used for configuration
- ✅ Sensitive data excluded from repository via `.gitignore`
- ✅ Pipeline triggers validated before deployment

---

## Future Enhancements

- 🐳 Docker containerization for consistent environments
- ☸️ Kubernetes deployment for orchestration
- 🌐 Multi-cloud deployment (AWS, GCP, Azure)
- 🔔 Slack/Discord notifications on deployment
- 📊 Advanced monitoring with Prometheus & Grafana
- 🔄 Automated rollback system
- 🧪 Integration tests with Playwright

---

## Author

**Udit Prasad**  
📧 [uditprasad32@gmail.com](mailto:uditprasad32@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/uditprasad32)  
🐙 [GitHub](https://github.com/uditprasad2903)

---

## License

This project is created for educational and internship purposes.

---

*Project completed as part of DevOps Internship Program (2025)*
