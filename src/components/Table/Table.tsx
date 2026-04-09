import {
  forwardRef,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface TableRootProps extends HTMLAttributes<HTMLTableElement>, NovaTestProps {
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

const NovaTableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ striped, hoverable, bordered, compact, novaTestId = 'table', className, ...rest }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        data-nova-test={novaTestId}
        data-striped={striped || undefined}
        data-hoverable={hoverable || undefined}
        className={cn(
          'w-full caption-bottom text-sm',
          bordered && 'border border-[var(--nova-border-default)]',
          className,
        )}
        {...rest}
      />
    </div>
  ),
);
NovaTableRoot.displayName = 'NovaTable';

const NovaTableHead = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement> & NovaTestProps
>(({ novaTestId = 'table-head', className, ...rest }, ref) => (
  <thead
    ref={ref}
    data-nova-test={novaTestId}
    className={cn(
      'border-b border-[var(--nova-border-default)] bg-[var(--nova-bg-secondary)]',
      className,
    )}
    {...rest}
  />
));
NovaTableHead.displayName = 'NovaTable.Head';

const NovaTableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement> & NovaTestProps
>(({ novaTestId = 'table-body', className, ...rest }, ref) => (
  <tbody
    ref={ref}
    data-nova-test={novaTestId}
    className={cn(
      '[&>tr:last-child]:border-0',
      '[&[data-striped]>tr:nth-child(even)]:bg-[var(--nova-bg-secondary)]',
      className,
    )}
    {...rest}
  />
));
NovaTableBody.displayName = 'NovaTable.Body';

const NovaTableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement> & NovaTestProps
>(({ novaTestId = 'table-row', className, ...rest }, ref) => (
  <tr
    ref={ref}
    data-nova-test={novaTestId}
    className={cn(
      'border-b border-[var(--nova-border-default)] transition-colors',
      'hover:bg-[var(--nova-bg-tertiary)]',
      className,
    )}
    {...rest}
  />
));
NovaTableRow.displayName = 'NovaTable.Row';

const NovaTableHeaderCell = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement> & NovaTestProps
>(({ novaTestId = 'table-th', className, ...rest }, ref) => (
  <th
    ref={ref}
    data-nova-test={novaTestId}
    className={cn(
      'h-10 px-4 text-left align-middle font-medium text-[var(--nova-text-secondary)]',
      className,
    )}
    {...rest}
  />
));
NovaTableHeaderCell.displayName = 'NovaTable.HeaderCell';

const NovaTableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement> & NovaTestProps
>(({ novaTestId = 'table-td', className, ...rest }, ref) => (
  <td
    ref={ref}
    data-nova-test={novaTestId}
    className={cn('px-4 py-3 align-middle text-[var(--nova-text-primary)]', className)}
    {...rest}
  />
));
NovaTableCell.displayName = 'NovaTable.Cell';

export const NovaTable = Object.assign(NovaTableRoot, {
  Head: NovaTableHead,
  Body: NovaTableBody,
  Row: NovaTableRow,
  HeaderCell: NovaTableHeaderCell,
  Cell: NovaTableCell,
});
