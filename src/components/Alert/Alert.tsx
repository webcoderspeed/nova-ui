'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface NovaAlertProps extends HTMLAttributes<HTMLDivElement>, NovaTestProps {
  variant?: AlertVariant;
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'bg-[color-mix(in_oklab,var(--nova-color-info)_10%,transparent)] border-[var(--nova-color-info)] text-[var(--nova-text-primary)]',
  success:
    'bg-[color-mix(in_oklab,var(--nova-color-success)_10%,transparent)] border-[var(--nova-color-success)] text-[var(--nova-text-primary)]',
  warning:
    'bg-[color-mix(in_oklab,var(--nova-color-warning)_10%,transparent)] border-[var(--nova-color-warning)] text-[var(--nova-text-primary)]',
  error:
    'bg-[color-mix(in_oklab,var(--nova-color-error)_10%,transparent)] border-[var(--nova-color-error)] text-[var(--nova-text-primary)]',
};

const iconColorClasses: Record<AlertVariant, string> = {
  info: 'text-[var(--nova-color-info)]',
  success: 'text-[var(--nova-color-success)]',
  warning: 'text-[var(--nova-color-warning)]',
  error: 'text-[var(--nova-color-error)]',
};

const defaultIcons: Record<AlertVariant, ReactNode> = {
  info: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
  success: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const NovaAlert = forwardRef<HTMLDivElement, NovaAlertProps>(
  (
    { variant = 'info', title, icon, onClose, children, novaTestId = 'alert', className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        data-nova-test={novaTestId}
        className={cn(
          'flex gap-3 rounded-[var(--nova-radius-md)] border-l-4 p-4 text-sm',
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        <div className={cn('shrink-0', iconColorClasses[variant])}>
          {icon ?? defaultIcons[variant]}
        </div>
        <div className="min-w-0 flex-1">
          {title && (
            <p
              data-nova-test={`${novaTestId}-title`}
              className="mb-1 font-semibold text-[var(--nova-text-primary)]"
            >
              {title}
            </p>
          )}
          <div className="text-[var(--nova-text-secondary)]">{children}</div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close alert"
            data-nova-test={`${novaTestId}-close`}
            className="shrink-0 text-[var(--nova-text-tertiary)] transition-colors hover:text-[var(--nova-text-primary)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

NovaAlert.displayName = 'NovaAlert';
