import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { NovaTestProps } from '../../types';
import { PAGINATION_TEST_IDS } from './Pagination.testIds';

export interface PaginationProps extends NovaTestProps {
  /** Current active page (1-based) */
  page: number;
  /** Total number of pages */
  totalPages: number;
  /** Called when the user selects a different page */
  onChange: (page: number) => void;
  /** Number of sibling pages to show around the current page */
  siblingCount?: number;
  className?: string;
  'aria-label'?: string;
}

type PageItem = number | 'ellipsis-left' | 'ellipsis-right';

function getPageRange(page: number, totalPages: number, siblingCount: number): PageItem[] {
  const range: PageItem[] = [];

  const leftSibling = Math.max(page - siblingCount, 2);
  const rightSibling = Math.min(page + siblingCount, totalPages - 1);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  range.push(1);

  if (showLeftEllipsis) {
    range.push('ellipsis-left');
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    range.push(i);
  }

  if (showRightEllipsis) {
    range.push('ellipsis-right');
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
}

const basePageBtn =
  'inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--nova-color-primary) disabled:pointer-events-none disabled:opacity-40';

export const NovaPagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      totalPages,
      onChange,
      siblingCount = 1,
      className,
      novaTestId = 'pagination',
      'aria-label': ariaLabel = 'Pagination',
    },
    ref,
  ) => {
    const pages = getPageRange(page, totalPages, siblingCount);

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        data-nova-test={novaTestId}
        className={clsx('flex items-center gap-1', className)}
      >
        <button
          type="button"
          onClick={() => onChange(page - 1)}
          disabled={page <= 1}
          aria-label="Go to previous page"
          data-nova-test={PAGINATION_TEST_IDS.prevButton}
          className={clsx(
            basePageBtn,
            'text-(--nova-text-secondary) hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {pages.map((p) =>
          p === 'ellipsis-left' || p === 'ellipsis-right' ? (
            <span
              key={p}
              data-nova-test={PAGINATION_TEST_IDS.ellipsis}
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center text-sm text-(--nova-text-tertiary)"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-label={`Go to page ${p}`}
              aria-current={p === page ? 'page' : undefined}
              data-nova-test={PAGINATION_TEST_IDS.pageButton(p)}
              className={clsx(
                basePageBtn,
                p === page
                  ? 'bg-(--nova-color-primary) text-white'
                  : 'text-(--nova-text-secondary) hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)',
              )}
            >
              {p}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onChange(page + 1)}
          disabled={page >= totalPages}
          aria-label="Go to next page"
          data-nova-test={PAGINATION_TEST_IDS.nextButton}
          className={clsx(
            basePageBtn,
            'text-(--nova-text-secondary) hover:bg-(--nova-bg-secondary) hover:text-(--nova-text-primary)',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
    );
  },
);

NovaPagination.displayName = 'NovaPagination';
