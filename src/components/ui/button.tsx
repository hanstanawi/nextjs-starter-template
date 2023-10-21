import { type PropsWithChildren } from 'react';

type ButtonProps = {
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
};

export default function Button({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className="bg-black text-white" onClick={onClick}>
      {children}
    </button>
  );
}
