import { useLessonStore } from '@/stores/lessonStore';
import { generateLessonWithParams } from '@/lib/gemini';

export const useLesson = () => {
  const { lessons, currentLesson, loading, error, setLessons, setCurrentLesson, setLoading, setError } = useLessonStore();

  const generateLesson = async (params: any) => {
    try {
      setLoading(true);
      const content = await generateLessonWithParams(params);
      const newLesson = {
        id: Date.now().toString(),
        userId: 'user_id',
        title: params.topic,
        subject: params.subject,
        grade: params.grade,
        topic: params.topic,
        board: params.board,
        language: params.language,
        content: {
          simplified: content,
          advanced: content,
          dyslexiaFriendly: content,
          adhdFriendly: content,
          audioNarration: null,
          summary: content,
          quiz: [],
          homework: '',
          activities: [],
          teacherNotes: '',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setCurrentLesson(newLesson);
      setLessons([newLesson, ...lessons]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate lesson');
    } finally {
      setLoading(false);
    }
  };

  return { lessons, currentLesson, loading, error, generateLesson };
};