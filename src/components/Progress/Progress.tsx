'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import type { NovaTestProps, Size } from '../../types/common';
import { cn } from '../../utils/cn';

export interface NovaProgressProps extends HTMLAttributes<HTMLDivElement>, NovaTestProps {
  value: number;
  max?: number;
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  indeterminate?: boolean;
  label?: string;
}

const sizeClasses: Record<string, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses = {
  primary: 'bg-[var(--nova-color-primary)]',
  success: 'bg-[var(--nova-color-success)]',
  warning: 'bg-[var(--nova-color-warning)]',
  error: 'bg-[var(--nova-color-error)]',
};

export const NovaProgress = forwardRef<HTMLDivElement, NovaProgressProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      variant = 'primary',
      showLabel = false,
      indeterminate = false,
      label = 'Progress',
      novaTestId = 'progress',
      className,
      ...props
    },
    ref,
  ) => {
    const clamped = Math.min(Math.max(value, 0), max);
    const percentage = (clamped / max) * 100;

    return (
      <div className={cn('w-full', className)}>
        {showLabel && !indeterminate && (
          <div className="mb-1 flex justify-between text-xs text-[var(--nova-text-secondary)]">
            <span data-nova-test={`${novaTestId}-label`}>{label}</span>
            <span data-nova-test={`${novaTestId}-value`}>{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-label={label}
          aria-valuenow={indeterminate ? undefined : clamped}
          aria-valuemin={0}
          aria-valuemax={max}
          data-nova-test={novaTestId}
          className={cn(
            'w-full overflow-hidden rounded-full bg-[var(--nova-bg-tertiary)]',
            sizeClasses[size],
          )}
          {...props}
        >
          <div
            data-nova-test={`${novaTestId}-bar`}
            className={cn(
              'h-full rounded-full transition-[width] duration-[var(--nova-duration-normal)]',
              variantClasses[variant],
              indeterminate && 'animate-[progress-indeterminate_1.5s_ease-in-out_infinite]',
            )}
            style={{
              width: indeterminate ? '40%' : `${percentage}%`,
            }}
          />
        </div>
      </div>
    );
  },
);

NovaProgress.displayName = 'NovaProgress';
