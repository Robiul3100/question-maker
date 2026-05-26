# Madrasa Question Paper Maker — Project Context

> **Always keep this context in mind for ALL prompts in this project.**

## Project Overview
A mobile-first **Progressive Web App (PWA)** called **মাদ্রাসা প্রশ্নপত্র মেকার** (Madrasa Question Paper Maker) that allows Madrasa teachers in Bangladesh to **create, manage, and print professional question papers and notices** entirely from their mobile phones. This replaces Microsoft Word for question paper creation.

## Target Users
- Madrasa teachers in Bangladesh, India, Pakistan
- **Low tech literacy** users
- **Primarily mobile users** (Android)
- Languages: **Bengali (primary), English, Arabic, Urdu**

## Core Tech Stack
- **React 18 + TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Firebase Auth** (email/password + Google)
- **Cloud Firestore** (database)
- **Firebase Storage** (file uploads)
- **React Router v6**
- **Zustand** (state management)
- **React Hook Form + Zod** (forms)
- **jsPDF + html2canvas** (PDF generation)
- **Vite** (build tool)

## Design System
| Token | Value |
|---|---|
| Primary Color | `#2d8653` (Islamic green) |
| Secondary Color | `#1a5c38` (dark green) |
| Accent | `#f0faf4` (light green background) |
| Text | `#1a1a1a` |
| Font Bengali | `'SolaimanLipi', 'Kalpurush', sans-serif` |
| Font Arabic/Urdu | `'Noto Nastaliq Urdu', 'Amiri', serif` |
| Font English | `'Poppins', sans-serif` |
| Border Radius | 12px (cards), 8px (buttons), 20px (modals) |
| Shadow | `0 2px 12px rgba(0,0,0,0.08)` |

## UI Pattern
- **Mobile-first** (max-width: **428px** design target)
- **Bottom navigation bar** (5 items)
- **Green header bar** on all pages
- Cards with rounded corners and subtle shadows
- **Slide-up modal sheets**
- **Touch-friendly tap targets** (min 44px)

## Firestore Collections Structure

```
users/{userId}
  - email, name, phone, createdAt, subscriptionStatus, subscriptionExpiry

users/{userId}/institutions/{institutionId}
  - nameBn, nameEn, address, logo (url), defaultLanguage, footer
  - examName, examYear, createdAt, updatedAt

users/{userId}/classes/{classId}
  - name (object: {bn, en, ar, ur}), order, createdAt

users/{userId}/subjects/{subjectId}
  - name (object: {bn, en, ar, ur}), classId, createdAt

users/{userId}/examTypes/{examTypeId}
  - name (object: {bn, en, ar, ur}), createdAt

users/{userId}/questionPapers/{paperId}
  - title, language, institutionId, classId, subjectId, examTypeId
  - examName, duration, totalMarks, instructions, footer
  - pageSize (a4 | a4double | a5 | a4landscape)
  - margins: { top, bottom, left, right }
  - fontSizes: { institutionName, address, examName, subjectClass, timeMarks, headerGap }
  - questions: Question[]
  - createdAt, updatedAt, isPinned

users/{userId}/notices/{noticeId}
  - type (general | holiday | exam)
  - language, title, content, headerImageUrl
  - headerHeight, font, watermark, layout
  - createdAt, updatedAt
```

## Question Object Structure

```ts
type QuestionType =
  | 'general'
  | 'sub'
  | 'vocabulary'
  | 'mcq'
  | 'tick_mcq'
  | 'math_mcq'
  | 'table'
  | 'section';

interface Question {
  id: string;
  type: QuestionType;
  number: number;
  title: string;          // section heading or question directive
  columns: 1 | 2 | 3 | 4 | 5;
  marks: number;
  isBoxed: boolean;
  items: QuestionItem[];
}

interface QuestionItem {
  id: string;
  text: string;
  marks: number;
  subItems: SubItem[];    // for sub-question type
}

interface SubItem {
  id: string;
  text: string;
  marks: number;
}
```

## Coding Conventions
- TypeScript **strict mode** is mandatory; no `any` unless unavoidable.
- All Firestore reads/writes go through helpers in `src/lib/`, never directly from components.
- All form validation uses **Zod** schemas; forms use **React Hook Form**.
- All routes that require auth go behind `<ProtectedRoute>`.
- Multilingual labels live in objects shaped `{ bn, en, ar, ur }` to match the schema.
- Components are **mobile-first** — design at 428px max width first, then enhance.
- Use design tokens from `tailwind.config.js` (colors `primary`, `secondary`, `accent`); do not hardcode hex values.
