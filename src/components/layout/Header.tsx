import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  right?: ReactNode;
  className?: string;
}

export function Header({ title, showBack = false, right, className }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header
      className={cn(
        'sticky top-0 z-30 bg-primary text-white shadow-card safe-top',
        className,
      )}
    >
      <div className="flex h-14 items-center justify-between px-3">
        <div className="flex min-w-0 items-center gap-2">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              aria-label="Back"
              className="min-h-tap min-w-tap rounded-full p-2 hover:bg-white/10 active:bg-white/20"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          <h1 className="truncate text-base font-semibold">{title}</h1>
        </div>
        {right && <div className="flex items-center gap-1">{right}</div>}
      </div>
    </header>
  );
}
