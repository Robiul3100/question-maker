import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-600 active:bg-secondary disabled:bg-primary/50',
  secondary:
    'bg-accent text-primary border border-primary/20 hover:bg-primary-100 active:bg-primary-100',
  ghost: 'bg-transparent text-primary hover:bg-accent active:bg-primary-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
        'disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
