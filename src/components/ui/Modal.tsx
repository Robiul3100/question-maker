import { useEffect, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /** Slide up from bottom (default true) — matches mobile design language. */
  bottomSheet?: boolean;
}

/**
 * A mobile-first slide-up modal sheet. Press Escape or tap the backdrop to dismiss.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  bottomSheet = true,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'w-full max-w-app bg-white rounded-modal shadow-card safe-bottom',
          bottomSheet
            ? 'animate-[slideUp_0.2s_ease-out] rounded-b-none'
            : 'mx-4 mb-auto mt-auto rounded-modal',
        )}
      >
        <div className="flex items-center justify-center pt-3">
          <span className="h-1.5 w-12 rounded-full bg-gray-200" />
        </div>
        {title && (
          <h2 className="px-5 pt-3 pb-2 text-lg font-semibold text-ink">
            {title}
          </h2>
        )}
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
}
