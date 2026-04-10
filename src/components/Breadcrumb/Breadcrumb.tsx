'use client';

import { Fragment, forwardRef, type ReactNode } from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NovaBreadcrumbProps extends NovaTestProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

const DefaultSeparator = (
  <svg
    className="h-4 w-4 text-[var(--nova-text-tertiary)]"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export const NovaBreadcrumb = forwardRef<HTMLElement, NovaBreadcrumbProps>(
  ({ items, separator = DefaultSeparator, novaTestId = 'breadcrumb', className }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        data-nova-test={novaTestId}
        className={cn('flex', className)}
      >
        <ol className="flex items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <Fragment key={`${item.label}-${item.href ?? 'nolink'}`}>
                <li className="flex items-center">
                  {isLast || !item.href ? (
                    <span
                      data-nova-test={`${novaTestId}-item-${index}`}
                      aria-current={isLast ? 'page' : undefined}
                      className={cn(
                        'text-sm',
                        isLast
                          ? 'font-medium text-[var(--nova-text-primary)]'
                          : 'text-[var(--nova-text-tertiary)]',
                      )}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      data-nova-test={`${novaTestId}-item-${index}`}
                      className="text-sm text-[var(--nova-text-tertiary)] transition-colors hover:text-[var(--nova-text-primary)]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden="true" className="flex items-center">
                    {separator}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    );
  },
);

NovaBreadcrumb.displayName = 'NovaBreadcrumb';
