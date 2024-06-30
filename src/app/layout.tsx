import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description: 'A starter template to kickstart your Next.js project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'bg-white text-[#213547] dark:bg-[#121212] dark:text-white',
        )}
      >
        <Navbar />
        <main className="flex w-full items-center justify-center">
          <div className="max-w-5xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
