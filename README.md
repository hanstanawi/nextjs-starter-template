## Next.js + TypeScript + TailwindCSS Starter Template

Next.js starter template with TypeScript and TailwindCSS to kickstart your frontend / fullstack project.

### What's inside?

This starter template includes:

- [Next.js](https://nextjs.org/docs) with `app` directory - the React framework
- [React](https://react.dev/) - Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Your safety net when writing JavaScript
- [pnpm](https://pnpm.io/) - Fast and efficient package manager
- [TailwindCSS](https://tailwindcss.com/) - Utility first CSS
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Find & fix problems in the codebase and format code automatically on save
- [Lucide React](https://lucide.dev/) - Beautiful and consistent open-source icons for React
- [Husky](https://typicode.github.io/husky/) - Git hooks tool
  - [Commit Lint](https://commitlint.js.org/#/) - Force devs to follow conventional commit message
  - [Lint Staged](https://github.com/lint-staged/lint-staged) - Format & lint your code before committing, block commit if issues are detected
- [Github Actions](https://docs.github.com/en/actions) - Check, test, and build your code automatically on push and PR
- [Dependabot](https://github.com/dependabot) - Create pull-request to update your dependencies
- [Storybook](https://storybook.js.org/) - Document and test your components in isolated environment
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Unit test your components

### Getting Started

1. Clone repo:

   Tips: You can use [degit](https://github.com/Rich-Harris/degit) to clone this repo without running `git clone`. [Learn more](https://github.com/Rich-Harris/degit)

   ```bash
   degit hanstanawi/nextjs-starter-template your-app-name
   ```

   or simply use this template on GitHub when creating new repository.

2. Install dependencies:

   Make sure you have [pnpm](https://pnpm.io/) installed. [Learn more](https://pnpm.io/installation) about installing pnpm.

   ```
   pnpm install
   ```

3. Run the development server

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Storybook

This starter template comes with Storybook setup out of the box, a library to build, document, and test your components in an isolated environment. It is a great tool where you can share and document your components with your teammates or design team for design system and user experience purposes. [Learn more about Storybook.](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

- Run storybook:

  ```bash
  pnpm storybook
  ```

- Build storybook:
  ```bash
  pnpm storybook:build
  ```

You don't have to use Storybook in your project if you are building a small project or application. However, it's recommended to use Storybook as a component documentation tool if you are building a large project or application.

## Switching CSS Frameworks / UI Library

"What if I don't want to use Tailwind?"

You can use another React CSS framework or UI library, like [Chakra UI](https://chakra-ui.com/), by simply removing Tailwind config and its dev dependencies.

1. Remove Tailwind config
   ```bash
   rm -rf tailwind.config.ts postcss.config.js
   ```
2. Remove Tailwind directives on the `src/app/globals.css`

   You need to remove these lines of code

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Uninstall dev dependencies on `package.json`
   ```bash
   pnpm remove tailwindcss postcss prettier-plugin-tailwindcss autoprefixer tailwind-merge clsx
   ```
4. Remove Tailwind `cn` utility function
   ```bash
   rm -rf src/lib/utils.ts
   ```

Now you have removed TailwindCSS config and its dependencies, we can add another UI library or CSS framework, in this example, we are going to use [Chakra UI](https://chakra-ui.com/) a great choice for a simple and good-to-go component library to build React components.

This docs guides you a quick start to setup Chakra UI on this project. To learn more about [Chakra UI](https://chakra-ui.com/) you can visit Chakra UI [documentation](https://chakra-ui.com/docs/components)

1. Install Chakra UI dependencies
   ```bash
   pnpm add @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
   ```
2. Setup `Chakra` Provider

   Next.js v13 uses server components by default. However, Chakra only works on client components. We need to create a provider client component that consists of React providers and add `use client` at the top of the file.

   - Create `providers.tsx` file in `app` directory
   - Add `CacheProvider` and `ChakraProvider` as providers.

     `app/providers.tsx`

     ```tsx
     'use client';
     import { CacheProvider } from '@chakra-ui/next-js';
     import { ChakraProvider } from '@chakra-ui/react';
     import { type PropsWithChildren } from 'react';

     export default function Providers({ children }: PropsWithChildren) {
       return (
         <CacheProvider>
           <ChakraProvider>{children}</ChakraProvider>
         </CacheProvider>
       );
     }
     ```

3. Use `ChakraProvider` on the root layout

   In order to use `ChakraProvider` on the whole app. We need to import the providers in the `layout.tsx` file

   `app/layout.tsx`

   ```tsx
   import { Providers } from './providers';
   import { type PropsWithChildren } from 'react';

   export default function RootLayout({ children }: PropsWithChildren) {
     return (
       <html lang="en">
         <body>
           <Providers>{children}</Providers>
         </body>
       </html>
     );
   }
   ```

4. You can start using Chakra UI components in the project.

## Icons

This starter template uses Lucide React icons as the default icons library. You can switch to other React icons library such as [React Icons](https://react-icons.github.io/react-icons/) or [FontAwesome Icons](https://fontawesome.com/v5/docs/web/use-with/react)

1. Simply uninstall Lucide
   ```bash
   pnpm remove lucide-react
   ```
2. Install other icon library e.g. [React Icons](https://react-icons.github.io/react-icons/)
   ```bash
   pnpm add react-icons
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn TypeScript](https://learntypescript.dev/) - an interactive course to learn TypeScript
- [Learn TailwindCSS](https://tailwindcss.com/) - learn about TailwindCSS and its documentation
