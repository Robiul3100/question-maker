# মাদ্রাসা প্রশ্নপত্র মেকার (Madrasa Question Paper Maker)

A mobile-first **Progressive Web App** that lets Madrasa teachers create, manage and print professional question papers and notices entirely from their phone — no Microsoft Word required.

## Tech Stack

- React 18 + TypeScript (strict mode)
- Vite + `vite-plugin-pwa`
- Tailwind CSS (custom Islamic-green design tokens)
- Firebase Auth · Cloud Firestore · Storage
- React Router v6
- Zustand (state)
- React Hook Form + Zod (forms)
- jsPDF + html2canvas (PDF generation)

## Getting started

```bash
# 1. install
npm install

# 2. configure Firebase
cp .env.example .env.local
# fill in VITE_FIREBASE_* values from your Firebase project

# 3. run
npm run dev
```

The app renders inside a `max-w-app` (428px) container — design and test on mobile viewports first.

## Project structure

```
src/
├── components/
│   ├── auth/            ProtectedRoute
│   ├── layout/          AppLayout, Header, BottomNav
│   └── ui/              Button, Card, Input, Modal (slide-up sheet)
├── lib/                 firebase.ts, utils.ts
├── pages/               Login, Register, Home, QuestionPapers,
│                        QuestionPaperEditor, Notices, Settings, Profile, NotFound
├── stores/              authStore, paperStore (Zustand)
├── types/               domain types matching Firestore schema
├── App.tsx              auth listener + routes
├── main.tsx             React entry
├── routes.tsx           React Router config
└── index.css            Tailwind + base styles + Bengali fonts
```

## Design tokens

Configured in `tailwind.config.js`:

- `primary` → `#2d8653` (Islamic green) · `secondary` → `#1a5c38` · `accent` → `#f0faf4`
- Fonts: `font-bn` · `font-en` · `font-ar`
- Radius: `rounded-card` · `rounded-btn` · `rounded-modal`
- Shadow: `shadow-card`
- Layout: `max-w-app` (428px) · `min-h-tap` / `min-w-tap` (44px)

## Project context for Kiro

Full schema and conventions are persisted in [`.kiro/steering/project-context.md`](./.kiro/steering/project-context.md) so subsequent sessions automatically pick them up.

## Status

Initial scaffold — auth, routing, layout, design system and skeleton pages are in place. Next milestones: institution / class / subject management, question editor, PDF export.
