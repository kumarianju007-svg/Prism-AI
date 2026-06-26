export interface User {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
}

export interface Lesson {
  id: string;
  userId: string;
  title: string;
  subject: string;
  grade: string;
  topic: string;
  board: string;
  language: string;
  content: LessonContent;
  createdAt: Date;
  updatedAt: Date;
}

export interface LessonContent {
  simplified: string;
  advanced: string;
  dyslexiaFriendly: string;
  adhdFriendly: string;
  audioNarration: string | null;
  summary: string;
  quiz: QuizQuestion[];
  homework: string;
  activities: Activity[];
  teacherNotes: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  bloomLevel: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
}

export interface AccessibilitySettings {
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  dyslexiaFriendly: boolean;
  highContrast: boolean;
  textToSpeech: boolean;
}

export interface AnalyticsData {
  lessonsGenerated: number;
  accessibilityModesUsed: string[];
  languagesGenerated: string[];
  aiUsageMetrics: {
    totalApiCalls: number;
    totalTokensUsed: number;
  };
}
