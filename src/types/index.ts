// ----------------------------------------------------------------
// Domain types matching the Firestore schema declared in
// .kiro/steering/project-context.md
// ----------------------------------------------------------------

import type { Timestamp } from 'firebase/firestore';

/** Languages supported by the app. */
export type Language = 'bn' | 'en' | 'ar' | 'ur';

/** Multilingual label keyed by language code. */
export type LocalizedString = Record<Language, string>;

/** Page sizes supported by the question paper renderer. */
export type PageSize = 'a4' | 'a4double' | 'a5' | 'a4landscape';

/** Subscription tier for a user. */
export type SubscriptionStatus = 'free' | 'trial' | 'active' | 'expired';

// ---------------------------- User ----------------------------

export interface AppUser {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL?: string | null;
}

export interface UserProfile {
  email: string;
  name: string;
  phone?: string;
  createdAt: Timestamp;
  subscriptionStatus: SubscriptionStatus;
  subscriptionExpiry?: Timestamp;
}

// ------------------------- Institution ------------------------

export interface Institution {
  id: string;
  nameBn: string;
  nameEn: string;
  address: string;
  logo?: string; // Storage URL
  defaultLanguage: Language;
  footer?: string;
  examName?: string;
  examYear?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ---------------------------- Class ---------------------------

export interface ClassEntity {
  id: string;
  name: LocalizedString;
  order: number;
  createdAt: Timestamp;
}

// --------------------------- Subject --------------------------

export interface Subject {
  id: string;
  name: LocalizedString;
  classId: string;
  createdAt: Timestamp;
}

// -------------------------- ExamType --------------------------

export interface ExamType {
  id: string;
  name: LocalizedString;
  createdAt: Timestamp;
}

// ------------------------- Question ---------------------------

export type QuestionType =
  | 'general'
  | 'sub'
  | 'vocabulary'
  | 'mcq'
  | 'tick_mcq'
  | 'math_mcq'
  | 'table'
  | 'section';

export type ColumnCount = 1 | 2 | 3 | 4 | 5;

export interface SubItem {
  id: string;
  text: string;
  marks: number;
}

export interface QuestionItem {
  id: string;
  text: string;
  marks: number;
  subItems: SubItem[];
}

export interface Question {
  id: string;
  type: QuestionType;
  number: number;
  title: string;
  columns: ColumnCount;
  marks: number;
  isBoxed: boolean;
  items: QuestionItem[];
}

// ---------------------- Question Paper ------------------------

export interface Margins {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface FontSizes {
  institutionName: number;
  address: number;
  examName: number;
  subjectClass: number;
  timeMarks: number;
  headerGap: number;
}

export interface QuestionPaper {
  id: string;
  title: string;
  language: Language;
  institutionId: string;
  classId: string;
  subjectId: string;
  examTypeId: string;
  examName: string;
  duration: string;
  totalMarks: number;
  instructions?: string;
  footer?: string;
  pageSize: PageSize;
  margins: Margins;
  fontSizes: FontSizes;
  questions: Question[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isPinned: boolean;
}

// --------------------------- Notice ---------------------------

export type NoticeType = 'general' | 'holiday' | 'exam';

export interface Notice {
  id: string;
  type: NoticeType;
  language: Language;
  title: string;
  content: string;
  headerImageUrl?: string;
  headerHeight?: number;
  font?: string;
  watermark?: string;
  layout?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
