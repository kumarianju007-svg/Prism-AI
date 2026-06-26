'use client';

import { useState } from 'react';
import { useLesson } from '@/hooks/useLesson';

export default function LessonForm() {
  const { generateLesson, loading } = useLesson();
  const [formData, setFormData] = useState({
    subject: 'Mathematics',
    grade: '9',
    board: 'CBSE',
    topic: '',
    objectives: '',
    difficulties: [],
    language: 'English',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateLesson({
      ...formData,
      objectives: formData.objectives.split(',').map((o) => o.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-lg space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="input-base"
          >
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>History</option>
            <option>Geography</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Grade Level</label>
          <select
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="input-base"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
              <option key={g} value={g.toString()}>
                Grade {g}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Topic</label>
        <input
          type="text"
          required
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          placeholder="e.g., Quadratic Equations"
          className="input-base"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Learning Objectives (comma-separated)</label>
        <textarea
          value={formData.objectives}
          onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
          placeholder="e.g., Understand the concept, Solve problems, Apply in real-world"
          rows={3}
          className="input-base"
        />
      </div>
      <button type="submit" disabled={loading} className="button-primary w-full">
        {loading ? 'Generating...' : 'Generate Lesson'}
      </button>
    </form>
  );
}