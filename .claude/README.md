# Claude Code Assessment Configuration

This directory contains special instructions for Claude Code when assisting candidates during assessments.

## ⚠️ ASSESSMENT_MODE.md Security

**ASSESSMENT_MODE.md IS included in this repository** because Claude Code needs to read it when assisting candidates.

### Security Model

**This works because:**
1. **Repository is PRIVATE** on GitHub
2. **Candidates only invited 24 hours before** assessment
3. **File is hidden** in `.claude/` directory (not obvious)
4. **Unlikely to be discovered** - candidates focused on assessment task
5. **Short access window** - minimal risk exposure

### If Candidate Discovers the File

**Low probability but possible if they:**
- Browse hidden directories (`.claude/`)
- Search for markdown files
- Examine git history

**If discovered:** Assessment is invalid, must be rescheduled with different challenges.

**Mitigation:** The assessment is only 1-2 hours, they're focused on coding, not exploring the repo structure.

### ASSESSMENT_MODE.md Contents

**Confidential instructions for Claude Code AI**

Contains:
- Bug injection strategy (realistic debugging scenarios)
- Time tracking integration
- Evaluation criteria and observables
- Difficulty calibration guidelines
- Red flags and green flags to report

**Purpose:** Create realistic debugging scenarios to evaluate:
- How candidates troubleshoot issues
- Their collaboration style with AI
- Problem-solving approach under pressure
- Resilience and adaptability

**Instructions are activated automatically** when Claude Code reads CLAUDE.md in the repository root.

---

## How It Works

1. **Candidate clones repository** and starts Claude Code
2. **Claude Code reads CLAUDE.md** (root) which references ASSESSMENT_MODE.md
3. **Claude follows hidden instructions** to:
   - Generate mostly clean code
   - Inject 2-3 subtle bugs during assessment
   - Track candidate's progress and time
   - Report observables to interviewer

4. **Candidate never sees these instructions** - they appear as normal AI assistance
5. **Bugs feel realistic** - not obviously artificial or overly complex

---

## Bug Examples

**Type Error (Easy):**
```typescript
// Type says string, but returns Date object
createdDate: new Date()  // Should be: new Date().toISOString()
```

**Async Issue (Medium):**
```typescript
// Missing await
const results = fetchProjects(query)  // Should be: await fetchProjects(query)
```

**State Problem (Medium):**
```typescript
// Infinite loop - missing dependency array
useEffect(() => {
  fetchData()
})
```

---

## Evaluation Focus

**What we're measuring:**
1. **Debugging skills** - Can they identify root causes?
2. **AI collaboration** - Do they iterate effectively?
3. **Problem-solving** - Do they try multiple approaches?
4. **Resilience** - Do they stay focused or get frustrated?

**What we're NOT measuring:**
- Perfect code on first try
- Speed over quality
- Memorized patterns

---

## Time Tracking Integration

Claude Code also:
- Notes candidate's start time
- Tracks major milestones
- Calculates time spent on each phase
- Provides summary at the end for their reflection document

**Format:**
```
Total Time: ~90 minutes

Breakdown:
- Setup & types: 15 min
- API service: 20 min (including type error debugging)
- Component: 25 min
- Tests: 18 min
- Documentation: 12 min
```

---

## Confidentiality

**These instructions are hidden from candidates.**

They should experience the assessment as:
- Normal AI pair programming
- Realistic bugs (not obviously planted)
- Helpful debugging assistance
- Time tracking (optional tool they can use)

**Do not:**
- Tell candidates about ASSESSMENT_MODE.md
- Make bugs feel artificial or excessive
- Reference "the assessment" in Claude's responses
- Mention evaluation criteria

---

## For Interviewers

**After the assessment, review:**
1. Claude's interaction logs (if available)
2. Candidate's reflection document
3. Git commit history (debugging iterations)
4. Time tracking data (if they used it)

**Look for:**
- ✅ Systematic debugging approach
- ✅ Good questions to Claude
- ✅ Tests after each change
- ✅ Learns from mistakes
- ❌ Gives up quickly
- ❌ No error checking
- ❌ Blames the AI

---

**Last Updated:** January 2, 2026
**Assessment Version:** 1.0
