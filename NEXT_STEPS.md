# Next Steps - Blueprint Assessment Repository

## ✅ Repository Created Successfully!

**Location:** `C:\Users\ClayCampbell\Documents\GitHub\blueprint-assessment-starter\`

**File Count:** 29 files (clean, no git history from main blueprint repo)

**Verified:**
- ✅ Dependencies install successfully (763 packages, 0 vulnerabilities)
- ✅ TypeScript compiles without errors
- ✅ Next.js dev server starts successfully
- ✅ Clean git history (1 commit, orphan branch)
- ✅ No proprietary Blueprint business logic
- ✅ No sensitive credentials or data

---

## Push to GitHub

### 1. Create New Private Repository on GitHub

Go to: https://github.com/new

**Settings:**
- **Repository name:** `blueprint-assessment-starter`
- **Description:** "Hands-on coding assessment for Connect 2.0 platform candidates using Claude Code"
- **Visibility:** 🔒 **Private** (important!)
- **Do NOT** initialize with README, .gitignore, or license (we have them already)

### 2. Push Your Code

```bash
cd C:\Users\ClayCampbell\Documents\GitHub\blueprint-assessment-starter

# Add GitHub remote (replace YOUR_ORG with actual org)
git remote add origin git@github.com:claycampbell/blueprint-assessment-starter.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### 3. Configure Repository Settings on GitHub

**Settings → General:**
- ✅ Private repository
- ❌ Disable: Wikis
- ❌ Disable: Issues (use main blueprint repo for issues)
- ❌ Disable: Projects
- ❌ Disable: Discussions
- ✅ Enable: Pull requests

**Settings → Branches:**
- Protect `main` branch
- Require pull request before merging
- Require approvals: 1
- Dismiss stale pull request approvals when new commits are pushed

**Settings → Collaborators:**
- Add interviewers as collaborators (admin access)
- Do NOT add candidates yet (add 24 hours before assessment)

---

## For Raul's Assessment

### 24 Hours Before Assessment

1. **Invite Raul as Collaborator:**
   - GitHub repo → Settings → Collaborators
   - Add: raul@email.com (use his GitHub username if known)
   - Permission: Write access

2. **Send Assessment Setup Email:**
   - Use template: [docs/assessment/ASSESSMENT_SETUP_EMAIL.md](docs/assessment/ASSESSMENT_SETUP_EMAIL.md)
   - Include:
     - Repository URL
     - Assessment date/time
     - Links to INSTRUCTIONS.md
     - Claude Code installation instructions

3. **Verify He Can Access:**
   - Ask Raul to confirm he can clone the repo
   - Verify Claude Code is installed
   - Confirm `npm install` works
   - Ensure dev server starts (`npm run dev`)

### During Assessment (1-2 hours)

Raul will:
1. Create branch: `raul/assessment-project-search`
2. Build ProjectSearch component following [INSTRUCTIONS.md](docs/assessment/INSTRUCTIONS.md)
3. Create reflection document: `docs/assessment/RAUL_SUMMARY.md`
4. Submit pull request when complete

### After Assessment

1. **Review Submission:**
   - Use rubric: [docs/assessment/EVALUATION_RUBRIC.md](docs/assessment/EVALUATION_RUBRIC.md)
   - Test his code:
     ```bash
     git fetch origin
     git checkout raul/assessment-project-search
     cd starter-kit
     npm install
     npm run dev
     npm test
     npx tsc --noEmit
     ```
   - Review git history and PR

2. **Schedule Review Call** (30 min):
   - Screen share his code
   - Discuss approach and decisions
   - Deep dive on Claude Code experience
   - Make hiring decision

3. **Remove Access** (if not hired):
   - GitHub repo → Settings → Collaborators → Remove
   - Archive his branch (don't delete yet for reference)

---

## Repository Maintenance

### Keeping Assessment Materials Updated

When you update assessment docs in main blueprint repo:

1. Make changes in `blueprint/assessment/raul-diaz-clean` branch
2. Test with internal developer first
3. Copy updated files to assessment repo:
   ```bash
   cd /path/to/blueprint
   git checkout assessment/raul-diaz-clean

   # Copy updated files
   cp docs/assessment/INSTRUCTIONS.md /path/to/blueprint-assessment-starter/docs/assessment/

   cd /path/to/blueprint-assessment-starter
   git add docs/assessment/INSTRUCTIONS.md
   git commit -m "docs: Update assessment instructions"
   git push origin main
   ```

### Adding New Dependencies

If you need to add packages for future assessments:

```bash
cd starter-kit
npm install <package-name>
git add package.json
git commit -m "deps: Add <package-name> for assessment requirements"
git push origin main
```

---

## Security Checklist

Before sharing with candidates:

- ✅ No `.env` files with real credentials
- ✅ No proprietary Blueprint business logic
- ✅ No database schemas or real data models
- ✅ No AWS/infrastructure configurations
- ✅ No Jira/Everhour integration details
- ✅ No cost/budget information
- ✅ No strategic planning documents
- ✅ No client names or real project data
- ✅ Repository is PRIVATE (not public)
- ✅ `.gitignore` prevents credential commits

---

## Quick Reference

**Repository Structure:**
```
blueprint-assessment-starter/
├── docs/assessment/          # Instructions and rubrics
├── starter-kit/              # Next.js app
│   ├── src/
│   │   ├── types/           # TypeScript types (starter provided)
│   │   ├── components/      # Empty (candidate creates)
│   │   ├── services/        # Empty (candidate creates)
│   │   └── app/             # Minimal Next.js app
│   └── package.json         # Simplified dependencies
├── README.md                # Assessment overview
├── CLAUDE.md                # AI assistant guidelines
└── .gitignore               # Comprehensive ignore rules
```

**Key Files for Candidates:**
- [docs/assessment/INSTRUCTIONS.md](docs/assessment/INSTRUCTIONS.md) - Start here
- [CLAUDE.md](CLAUDE.md) - Claude Code guidelines
- [README.md](README.md) - Quick setup

**Key Files for Interviewers:**
- [docs/assessment/INTERVIEWER_QUICK_START.md](docs/assessment/INTERVIEWER_QUICK_START.md)
- [docs/assessment/EVALUATION_RUBRIC.md](docs/assessment/EVALUATION_RUBRIC.md)
- [docs/assessment/README.md](docs/assessment/README.md)

---

## Contact

**Questions or Issues?**
- Clay Campbell: clay@blueprint.com
- Main Blueprint Repo: https://github.com/claycampbell/blueprint

---

**Repository Created:** January 2, 2026
**Assessment Version:** 1.0
**Ready for Use:** ✅ Yes
