import { create } from 'zustand';
import type { Question, QuestionPaper } from '../types';

/**
 * Holds the in-progress question paper while the user is editing it.
 * Persisted to Firestore on save.
 */
interface PaperState {
  draft: Partial<QuestionPaper> | null;
  setDraft: (draft: Partial<QuestionPaper> | null) => void;
  patchDraft: (patch: Partial<QuestionPaper>) => void;
  setQuestions: (questions: Question[]) => void;
  reset: () => void;
}

export const usePaperStore = create<PaperState>((set) => ({
  draft: null,
  setDraft: (draft) => set({ draft }),
  patchDraft: (patch) =>
    set((state) => ({
      draft: { ...(state.draft ?? {}), ...patch },
    })),
  setQuestions: (questions) =>
    set((state) => ({
      draft: { ...(state.draft ?? {}), questions },
    })),
  reset: () => set({ draft: null }),
}));
