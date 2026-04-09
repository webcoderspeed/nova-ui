'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, NovaTestProps {
  label?: string;
  indeterminate?: boolean;
}

export const NovaCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, novaTestId = 'checkbox', className, id: propId, ...rest }, ref) => {
    const generatedId = useStableId('nova-checkbox');
    const inputId = propId || generatedId;

    return (
      <div data-nova-test={novaTestId} className="inline-flex items-center gap-2">
        <input
          ref={(node) => {
            if (node) node.indeterminate = indeterminate ?? false;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
          }}
          id={inputId}
          type="checkbox"
          data-nova-test={`${novaTestId}-input`}
          aria-checked={indeterminate ? 'mixed' : rest.checked}
          className={cn(
            'h-4 w-4 cursor-pointer rounded-[var(--nova-radius-sm)] border border-[var(--nova-border-default)] accent-[var(--nova-color-primary)]',
            'focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...rest}
        />
        {label && (
          <label
            htmlFor={inputId}
            data-nova-test={`${novaTestId}-label`}
            className="cursor-pointer text-sm text-[var(--nova-text-primary)] select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

NovaCheckbox.displayName = 'NovaCheckbox';
