import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-x-8 py-6">
        <Link
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          data-testid="react-link"
        >
          <Image
            src="/next.svg"
            className="animate-spin-slow w-14"
            width={56}
            height={56}
            alt="Next.js logo"
          />
        </Link>
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          data-testid="tailwind-link"
        >
          <Image
            src="/tailwind.svg"
            width={56}
            height={56}
            className="w-16"
            alt="Tailwind logo"
          />
        </Link>
        <Link
          href="https://typescriptlang.org"
          target="_blank"
          rel="noreferrer"
          data-testid="ts-link"
        >
          <Image
            src="/ts.svg"
            width={56}
            height={56}
            className="w-12 "
            alt="TS logo"
          />
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Next.js + TypeScript</h1>
        <h2 className="text-xl font-bold">Starter Template</h2>
      </div>

      <p className="mt-4 text-center text-sm opacity-60 dark:opacity-80">
        A starter template to kickstart your Next.js project
      </p>
    </div>
  );
}
