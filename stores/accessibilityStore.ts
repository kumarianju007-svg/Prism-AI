import { create } from 'zustand';
import { AccessibilitySettings } from '@/types';

interface AccessibilityState {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'md',
  dyslexiaFriendly: false,
  highContrast: false,
  textToSpeech: false,
};

export const useAccessibilityStore = create<AccessibilityState>((set) => ({
  settings: defaultSettings,
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
}));
