'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Adaptive Learning',
    description: 'AI creates multiple versions of your lesson for different learning needs',
    icon: '🎯',
  },
  {
    title: 'Accessibility First',
    description: 'Dyslexia-friendly, ADHD-friendly, and high-contrast options',
    icon: '♿',
  },
  {
    title: 'Multilingual Support',
    description: 'Automatically translate lessons into multiple languages',
    icon: '🌍',
  },
  {
    title: 'Smart Assessments',
    description: 'AI generates quizzes, homework, and Bloom\'s taxonomy questions',
    icon: '📊',
  },
  {
    title: 'Audio Narration',
    description: 'Convert lessons to speech for auditory learners',
    icon: '🔊',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track engagement and personalization metrics',
    icon: '📈',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-900/50">
      <div className="container-sm">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-xl hover:border-blue-500/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}