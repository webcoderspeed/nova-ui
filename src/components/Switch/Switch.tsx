'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type SwitchSize = 'sm' | 'md' | 'lg';

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role' | 'size'>,
    NovaTestProps {
  label?: string;
  switchSize?: SwitchSize;
}

const trackSizes: Record<SwitchSize, string> = {
  sm: 'h-5 w-9',
  md: 'h-6 w-11',
  lg: 'h-7 w-13',
};

const thumbSizes: Record<SwitchSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const thumbTranslate: Record<SwitchSize, string> = {
  sm: 'peer-checked:translate-x-4',
  md: 'peer-checked:translate-x-5',
  lg: 'peer-checked:translate-x-6',
};

export const NovaSwitch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, switchSize = 'md', novaTestId = 'switch', className, id: propId, ...rest }, ref) => {
    const generatedId = useStableId('nova-switch');
    const inputId = propId || generatedId;

    return (
      <div data-nova-test={novaTestId} className={cn('inline-flex items-center gap-2', className)}>
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            data-nova-test={`${novaTestId}-input`}
            aria-checked={rest.checked}
            className="peer sr-only"
            {...rest}
          />
          <div
            data-nova-test={`${novaTestId}-track`}
            className={cn(
              'rounded-full bg-[var(--nova-border-strong)] transition-colors duration-[var(--nova-duration-fast)]',
              'peer-checked:bg-[var(--nova-color-primary)]',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--nova-border-focus)] peer-focus-visible:ring-offset-2',
              trackSizes[switchSize],
            )}
          />
          <div
            data-nova-test={`${novaTestId}-thumb`}
            className={cn(
              'pointer-events-none absolute top-1/2 left-0.5 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform duration-[var(--nova-duration-fast)]',
              thumbSizes[switchSize],
              thumbTranslate[switchSize],
            )}
          />
        </div>
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

NovaSwitch.displayName = 'NovaSwitch';
