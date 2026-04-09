import type { ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends NovaTestProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-[var(--nova-bg-tertiary)] text-[var(--nova-text-primary)]',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
};

const dotVariantClasses: Record<BadgeVariant, string> = {
  default: 'bg-[var(--nova-text-tertiary)]',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

export function NovaBadge({
  variant = 'default',
  size = 'md',
  dot = false,
  novaTestId = 'badge',
  className,
  children,
}: BadgeProps) {
  return (
    <span
      data-nova-test={novaTestId}
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {dot && (
        <span
          data-nova-test={`${novaTestId}-dot`}
          className={cn('h-1.5 w-1.5 rounded-full', dotVariantClasses[variant])}
        />
      )}
      {children}
    </span>
  );
}
