'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.02] pointer-events-none" />
      <div className="container-sm text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            One Lesson. Every Learner.
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            PRISM AI transforms your lessons into personalized learning experiences tailored for every student's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="button-primary text-lg">
              Get Started Free
            </Link>
            <Link href="/#features" className="button-secondary text-lg">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}