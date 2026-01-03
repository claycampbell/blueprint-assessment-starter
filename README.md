# Blueprint Assessment Starter

Hands-on coding assessment for Connect 2.0 platform developer candidates.

## For Candidates

👉 **Start here:** [docs/assessment/INSTRUCTIONS.md](docs/assessment/INSTRUCTIONS.md)

## Quick Setup

```bash
# Install dependencies
cd starter-kit
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

## For Interviewers

See [docs/assessment/INTERVIEWER_QUICK_START.md](docs/assessment/INTERVIEWER_QUICK_START.md)

## Repository Purpose

This is an isolated assessment environment for evaluating how candidates collaborate with Claude Code (AI pair programming tool). It contains:

- Minimal Next.js + React + TypeScript starter kit
- Assessment instructions and evaluation rubrics
- Reference documentation
- NO proprietary business logic

## Technology Stack

- **Frontend:** React 18 + TypeScript
- **Framework:** Next.js 15
- **UI:** Material-UI v6 + Tailwind CSS
- **State Management:** Zustand (recommended)
- **Testing:** Jest + React Testing Library

## Assessment Time Limit

1-2 hours maximum

## Repository Structure

```
blueprint-assessment-starter/
├── docs/
│   └── assessment/          # Assessment instructions and rubrics
├── starter-kit/             # Next.js application
│   ├── src/
│   │   ├── types/          # TypeScript type definitions (starter provided)
│   │   ├── components/     # React components (candidate creates)
│   │   ├── services/       # API services (candidate creates)
│   │   └── app/            # Next.js app directory
│   └── package.json
└── README.md               # This file
```

## Support

For technical issues during assessment, contact the interviewer immediately.

## License

Proprietary - Assessment use only
