import { create } from 'zustand';
import type { AppUser } from '../types';

interface AuthState {
  user: AppUser | null;
  loading: boolean;
  setUser: (user: AppUser | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  reset: () => set({ user: null, loading: false }),
}));
