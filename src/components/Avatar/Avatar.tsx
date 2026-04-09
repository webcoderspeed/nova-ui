'use client';

import { forwardRef, useState } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends NovaTestProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export const NovaAvatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = '', fallback, size = 'md', novaTestId = 'avatar', className }, ref) => {
    const [imgError, setImgError] = useState(false);
    const showFallback = !src || imgError;
    const initials = fallback ? getInitials(fallback) : '?';

    return (
      <div
        ref={ref}
        data-nova-test={novaTestId}
        className={cn(
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
          'bg-[var(--nova-bg-tertiary)] font-medium text-[var(--nova-text-secondary)]',
          sizeClasses[size],
          className,
        )}
      >
        {showFallback ? (
          <span data-nova-test={`${novaTestId}-fallback`} aria-hidden="true">
            {initials}
          </span>
        ) : (
          <img
            src={src}
            alt={alt}
            data-nova-test={`${novaTestId}-image`}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    );
  },
);

NovaAvatar.displayName = 'NovaAvatar';
