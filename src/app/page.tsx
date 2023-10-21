import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="h-full flex flex-col justify-center items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="text-4xl font-semibold text-center mt-8">
            Starter Template
          </h1>
          <p className="text-base text-center mt-4 text-black opacity-60">
            A starter template to kickstart your Next.js project
          </p>
          <p></p>
          <ul className="mt-8 text-center text-black opacity-50">
            <li>Next.js 13 with app directory</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Husky</li>
            <li>Github Actions</li>
            <li>Dependabot</li>
            <li>Jest + React Testing Library</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
