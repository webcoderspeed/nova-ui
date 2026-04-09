'use client';

import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
  duration: number;
}

interface ToastContextValue {
  toast: (message: string, options?: { variant?: ToastVariant; duration?: number }) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <NovaToastProvider>');
  return ctx;
}

let toastCounter = 0;

const variantClasses: Record<ToastVariant, string> = {
  success: 'border-l-4 border-[var(--nova-color-success)] bg-[var(--nova-surface-raised)]',
  error: 'border-l-4 border-[var(--nova-color-error)] bg-[var(--nova-surface-raised)]',
  warning: 'border-l-4 border-[var(--nova-color-warning)] bg-[var(--nova-surface-raised)]',
  info: 'border-l-4 border-[var(--nova-color-info)] bg-[var(--nova-surface-raised)]',
};

const variantRole: Record<ToastVariant, 'alert' | 'status'> = {
  success: 'status',
  error: 'alert',
  warning: 'alert',
  info: 'status',
};

function ToastItemComponent({
  item,
  onDismiss,
  novaTestId,
}: {
  item: ToastItem;
  onDismiss: (id: string) => void;
  novaTestId: string;
}) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(item.id), item.duration);
    return () => clearTimeout(timer);
  }, [item.id, item.duration, onDismiss]);

  return (
    <div
      role={variantRole[item.variant]}
      data-nova-test={`${novaTestId}-item`}
      className={cn(
        'flex items-center justify-between gap-3 rounded-[var(--nova-radius-md)] px-4 py-3 shadow-[var(--nova-shadow-md)]',
        'animate-[nova-slide-up_var(--nova-duration-normal)_var(--nova-easing-spring)]',
        'text-sm text-[var(--nova-text-primary)]',
        variantClasses[item.variant],
      )}
    >
      <span>{item.message}</span>
      <button
        type="button"
        aria-label="Dismiss"
        data-nova-test={`${novaTestId}-dismiss`}
        onClick={() => onDismiss(item.id)}
        className="shrink-0 text-[var(--nova-text-tertiary)] hover:text-[var(--nova-text-primary)]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
    </div>
  );
}

interface ToastProviderProps extends NovaTestProps {
  children: ReactNode;
  maxToasts?: number;
}

export function NovaToastProvider({
  children,
  maxToasts = 5,
  novaTestId = 'toast',
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback(
    (message: string, options?: { variant?: ToastVariant; duration?: number }) => {
      const newToast: ToastItem = {
        id: `toast-${++toastCounter}`,
        message,
        variant: options?.variant ?? 'info',
        duration: options?.duration ?? 4000,
      };
      setToasts((prev) => [...prev.slice(-(maxToasts - 1)), newToast]);
    },
    [maxToasts],
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            data-nova-test={`${novaTestId}-container`}
            className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm"
            aria-live="polite"
          >
            {toasts.map((item) => (
              <ToastItemComponent
                key={item.id}
                item={item}
                onDismiss={dismiss}
                novaTestId={novaTestId}
              />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
}
