import { ButtonHTMLAttributes, type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        `cursor-pointer rounded-lg border border-black  
        bg-black px-4 py-3 text-white dark:border-white dark:bg-transparent 
        dark:hover:bg-white dark:hover:bg-opacity-10 md:hover:bg-opacity-80 md:hover:text-white`,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
