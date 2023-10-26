import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-24 pb-24 pt-20">
      <div className="relative flex place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="flex h-full flex-col items-center justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="mt-8 text-center text-4xl font-extrabold">
            Starter Template
          </h1>
          <p className="mt-4 text-center text-base opacity-60 dark:opacity-80">
            A starter template to kickstart your Next.js project
          </p>
          <p className="mt-8 text-start text-xl font-semibold">
            What&apos; inside?
          </p>
          <ul className="mb-6 mt-4 list-disc text-black opacity-50 dark:text-white dark:opacity-80">
            <li>Next.js 13 with app dir</li>
            <li>React</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Husky</li>
            <li>Github Actions</li>
            <li>Dependabot</li>
            <li>Jest + React Testing Library</li>
          </ul>
          <Button>
            <Link
              href="https://github.com/hanstanawi/nextjs-starter-template"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
