import { ButtonHTMLAttributes, type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-black text-white" {...props}>
      {children}
    </button>
  );
}
