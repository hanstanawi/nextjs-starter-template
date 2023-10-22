import { ButtonHTMLAttributes, type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="bg-black text-white" onClick={onClick}>
      {children}
    </button>
  );
}
