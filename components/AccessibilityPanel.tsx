'use client';

import { useAccessibilityStore } from '@/stores/accessibilityStore';

export default function AccessibilityPanel() {
  const { settings, updateSettings } = useAccessibilityStore();

  return (
    <div className="glass p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
            className="input-base"
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="dyslexia"
            checked={settings.dyslexiaFriendly}
            onChange={(e) => updateSettings({ dyslexiaFriendly: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="dyslexia">Dyslexia-Friendly Font</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="contrast"
            checked={settings.highContrast}
            onChange={(e) => updateSettings({ highContrast: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="contrast">High Contrast Mode</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="tts"
            checked={settings.textToSpeech}
            onChange={(e) => updateSettings({ textToSpeech: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="tts">Text-to-Speech</label>
        </div>
      </div>
    </div>
  );
}