import { create } from 'zustand';
import { Lesson } from '@/types';

interface LessonState {
  lessons: Lesson[];
  currentLesson: Lesson | null;
  loading: boolean;
  error: string | null;
  addLesson: (lesson: Lesson) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  setLessons: (lessons: Lesson[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useLessonStore = create<LessonState>((set) => ({
  lessons: [],
  currentLesson: null,
  loading: false,
  error: null,
  addLesson: (lesson) => set((state) => ({ lessons: [lesson, ...state.lessons] })),
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  setLessons: (lessons) => set({ lessons }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
