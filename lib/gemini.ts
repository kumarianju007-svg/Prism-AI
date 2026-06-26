import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const generateLessonContent = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
};

export const generateLessonWithParams = async (params: {
  subject: string;
  grade: string;
  topic: string;
  objectives: string[];
  difficulties: string[];
  language: string;
}) => {
  const prompt = `
You are an expert educational content creator. Create a comprehensive lesson with the following specifications:

Subject: ${params.subject}
Grade Level: ${params.grade}
Topic: ${params.topic}
Learning Objectives: ${params.objectives.join(', ')}
Difficulty Levels Needed: ${params.difficulties.join(', ')}
Language: ${params.language}

Please generate:
1. Main lesson content
2. Simplified version (for struggling students)
3. Advanced version (for advanced students)
4. Summary points
5. Quiz questions (5 questions)
6. Discussion questions
7. Real-world applications

Format the response in clear sections.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
