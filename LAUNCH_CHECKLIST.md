# Assessment Repository Launch Checklist

**Repository:** https://github.com/claycampbell/blueprint-assessment-starter
**Status:** ✅ Live on GitHub

---

## ✅ Completed

- [x] Created clean assessment repository (30 files)
- [x] Verified dependencies install (0 vulnerabilities)
- [x] Verified TypeScript compiles without errors
- [x] Verified Next.js dev server works
- [x] Pushed to GitHub
- [x] Documentation complete

---

## 🔧 Configure Repository Settings (Do Now)

### 1. Repository Visibility
- [ ] Verify repository is **Private** (not Public)
- [ ] URL: https://github.com/claycampbell/blueprint-assessment-starter/settings

### 2. Branch Protection
- [ ] Go to Settings → Branches → Add rule
- [ ] Branch name pattern: `main`
- [ ] Enable:
  - [x] Require a pull request before merging
  - [x] Require approvals (1)
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require status checks to pass before merging (if CI added)

### 3. Repository Features
- [ ] Settings → General → Features
- [ ] **Disable:** Wikis
- [ ] **Disable:** Issues (use main blueprint repo instead)
- [ ] **Disable:** Projects
- [ ] **Disable:** Discussions
- [ ] **Enable:** Pull requests only

### 4. Collaborators (Add Interviewers Only)
- [ ] Settings → Collaborators and teams
- [ ] Add: [Interviewer names] with **Admin** access
- [ ] **Do NOT add candidates yet** (wait until 24 hours before assessment)

### 5. Repository Description & Topics
- [ ] Settings → General
- [ ] **Description:** "Hands-on coding assessment for Connect 2.0 platform candidates using Claude Code"
- [ ] **Topics:** Add tags like `assessment`, `interview`, `react`, `typescript`, `nextjs`

---

## 📋 Before Raul's Assessment (24 Hours Prior)

### 1. Invite Raul as Collaborator
- [ ] Settings → Collaborators → Add people
- [ ] Email or GitHub username
- [ ] Permission level: **Write** (not Admin)

### 2. Send Setup Email
- [ ] Use template: [`docs/assessment/ASSESSMENT_SETUP_EMAIL.md`](docs/assessment/ASSESSMENT_SETUP_EMAIL.md)
- [ ] Include:
  - [x] Repository URL: https://github.com/claycampbell/blueprint-assessment-starter
  - [x] Assessment date and time
  - [x] Link to instructions: `docs/assessment/INSTRUCTIONS.md`
  - [x] Claude Code installation: https://claude.ai/download
  - [x] Estimated time: 1-2 hours

### 3. Pre-Assessment Verification
- [ ] Confirm Raul can clone the repository
- [ ] Verify he has Node.js 18+ installed
- [ ] Check Docker Desktop is running (if needed)
- [ ] Confirm Claude Code is installed and working
- [ ] Test that he can run:
  ```bash
  cd starter-kit
  npm install
  npm run dev
  ```

---

## 🎯 During Assessment (1-2 Hours)

**Raul will:**
- [ ] Create branch: `raul/assessment-project-search`
- [ ] Implement ProjectSearch component
- [ ] Write tests
- [ ] Create reflection document: `docs/assessment/RAUL_SUMMARY.md`
- [ ] Submit pull request

**You should:**
- [ ] Monitor for any technical issues (check email)
- [ ] Be available for blocking problems only
- [ ] Do NOT help with coding - this is solo assessment

---

## 📊 After Assessment (Review Process)

### 1. Code Review
- [ ] Review PR: https://github.com/claycampbell/blueprint-assessment-starter/pulls
- [ ] Use rubric: [`docs/assessment/EVALUATION_RUBRIC.md`](docs/assessment/EVALUATION_RUBRIC.md)
- [ ] Test code locally:
  ```bash
  git fetch origin
  git checkout raul/assessment-project-search
  cd starter-kit
  npm install
  npm run dev       # Verify app works
  npm test          # Run tests
  npx tsc --noEmit  # Check TypeScript
  ```

### 2. Evaluate Git History
- [ ] Check commit messages (quality, frequency)
- [ ] Review commit progression (incremental?)
- [ ] Look for evidence of Claude Code use
- [ ] Verify no external code copying

### 3. Review Reflection Document
- [ ] Read `docs/assessment/RAUL_SUMMARY.md`
- [ ] Assess self-awareness
- [ ] Review Claude Code interaction log
- [ ] Evaluate problem-solving approach

### 4. Score Assessment
- [ ] Claude Code Collaboration (40%)
- [ ] Code Quality (30%)
- [ ] Communication (20%)
- [ ] Problem-Solving (10%)
- [ ] **Total Score:** ___/50

**Scoring Guide:**
- **43-50:** Strong Hire
- **35-42:** Hire
- **28-34:** Maybe
- **<28:** No Hire

### 5. Schedule Review Call (30 Minutes)
- [ ] Screen share his code
- [ ] Walk through his approach
- [ ] Discuss Claude Code experience
- [ ] Ask clarifying questions
- [ ] Make hiring decision

### 6. Post-Review Actions

**If Hire:**
- [ ] Discuss next steps
- [ ] Send offer details
- [ ] Plan onboarding (Epic DP01-65)
- [ ] Keep his branch for reference

**If No Hire:**
- [ ] Provide constructive feedback
- [ ] Remove as collaborator
- [ ] Archive his branch
- [ ] Document lessons learned

---

## 🔒 Security Checklist (Verify Periodically)

- [ ] Repository is Private
- [ ] No `.env` files with credentials
- [ ] No proprietary Blueprint code
- [ ] No database schemas
- [ ] No AWS/deployment configs
- [ ] No cost/budget documents
- [ ] No strategic planning docs
- [ ] Candidates have Write (not Admin) access
- [ ] `.gitignore` prevents credential commits

---

## 📁 Key Files Reference

**For Candidates:**
- [`README.md`](README.md) - Quick start
- [`docs/assessment/INSTRUCTIONS.md`](docs/assessment/INSTRUCTIONS.md) - Full instructions
- [`CLAUDE.md`](CLAUDE.md) - AI assistant guidelines

**For Interviewers:**
- [`docs/assessment/INTERVIEWER_QUICK_START.md`](docs/assessment/INTERVIEWER_QUICK_START.md)
- [`docs/assessment/EVALUATION_RUBRIC.md`](docs/assessment/EVALUATION_RUBRIC.md)
- [`docs/assessment/README.md`](docs/assessment/README.md)

**For Setup:**
- [`NEXT_STEPS.md`](NEXT_STEPS.md) - Detailed workflow
- [`docs/assessment/ASSESSMENT_SETUP_EMAIL.md`](docs/assessment/ASSESSMENT_SETUP_EMAIL.md)

---

## 🔄 Maintenance

### Updating Assessment Materials
When docs change in main blueprint repo:
```bash
# Copy updated files
cp /path/to/blueprint/docs/assessment/INSTRUCTIONS.md docs/assessment/

# Commit and push
git add docs/assessment/INSTRUCTIONS.md
git commit -m "docs: Update assessment instructions"
git push origin main
```

### Re-creating Repository
If needed:
```bash
cd /path/to/blueprint
git checkout assessment/raul-diaz-clean
rm -rf ../blueprint-assessment-starter
./scripts/create-assessment-repo.sh ../blueprint-assessment-starter
```

---

## 📞 Support

**Technical Issues:**
- Clay Campbell: clay@blueprint.com
- Main Repo: https://github.com/claycampbell/blueprint

**Repository Issues:**
- Check: [`NEXT_STEPS.md`](NEXT_STEPS.md)
- Review: [`docs/assessment/NEW_REPO_SETUP.md`](docs/assessment/NEW_REPO_SETUP.md)

---

**Last Updated:** January 2, 2026
**Repository Status:** ✅ Live and Ready
**Assessment Ready:** ✅ Yes - Configure settings above first
