'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

export type SkeletonVariant = 'text' | 'rect' | 'circle';

export interface NovaSkeletonProps extends HTMLAttributes<HTMLDivElement>, NovaTestProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'rounded-[var(--nova-radius-sm)] h-4',
  rect: 'rounded-[var(--nova-radius-md)]',
  circle: 'rounded-full',
};

const animationClasses: Record<'pulse' | 'wave' | 'none', string> = {
  pulse: 'animate-pulse',
  wave: 'animate-[wave_1.6s_ease-in-out_infinite]',
  none: '',
};

export const NovaSkeleton = forwardRef<HTMLDivElement, NovaSkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      animation = 'pulse',
      novaTestId = 'skeleton',
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        data-nova-test={novaTestId}
        className={cn(
          'bg-[var(--nova-bg-tertiary)]',
          variantClasses[variant],
          animationClasses[animation],
          className,
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          ...style,
        }}
        {...props}
      />
    );
  },
);

NovaSkeleton.displayName = 'NovaSkeleton';
