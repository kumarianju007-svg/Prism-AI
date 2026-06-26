'use client';

import Link from 'next/link';
import { useAuthStore } from '@/stores/authStore';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Navigation() {
  const { user } = useAuthStore();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50">
      <div className="container-sm flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold gradient-text">
          PRISM AI
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/features" className="text-neutral-300 hover:text-white transition">
            Features
          </Link>
          <Link href="/pricing" className="text-neutral-300 hover:text-white transition">
            Pricing
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className="text-neutral-300 hover:text-white transition">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="button-secondary">
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="button-primary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}