'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LessonForm from '@/components/LessonForm';
import AccessibilityPanel from '@/components/AccessibilityPanel';

export default function Dashboard() {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-950 py-12">
      <div className="container-sm">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <LessonForm />
          </div>
          <div>
            <AccessibilityPanel />
          </div>
        </div>
      </div>
    </div>
  );
}