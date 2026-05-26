import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cn('bg-white rounded-card shadow-card p-4', className)}
    >
      {children}
    </div>
  );
}
