import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'PRISM AI - Adaptive Lesson Creation Platform',
  description: 'Transform one lesson into personalized learning experiences for every student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}