'use client';

import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, NovaTestProps {
  label?: string;
  error?: string;
  helperText?: string;
  inputSize?: InputSize;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 px-2.5 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const NovaInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      inputSize = 'md',
      leftAddon,
      rightAddon,
      novaTestId = 'input',
      className,
      id: propId,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useStableId('nova-input');
    const inputId = propId || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    return (
      <div data-nova-test={novaTestId} className="flex flex-col gap-1.5">
        {label && (
          <label
            data-nova-test={`${novaTestId}-label`}
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--nova-text-primary)]"
          >
            {label}
            {rest.required && <span className="ml-0.5 text-[var(--nova-color-error)]">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftAddon && (
            <div
              data-nova-test={`${novaTestId}-left-addon`}
              className="pointer-events-none absolute left-3 text-[var(--nova-text-tertiary)]"
            >
              {leftAddon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            data-nova-test={`${novaTestId}-field`}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            aria-required={rest.required || undefined}
            className={cn(
              'w-full rounded-[var(--nova-radius-md)] border bg-[var(--nova-bg-primary)] text-[var(--nova-text-primary)] transition-colors duration-[var(--nova-duration-fast)] outline-none',
              'placeholder:text-[var(--nova-text-tertiary)]',
              'focus:border-[var(--nova-border-focus)] focus:ring-2 focus:ring-[var(--nova-border-focus)]/20',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error
                ? 'border-[var(--nova-color-error)] focus:border-[var(--nova-color-error)] focus:ring-[var(--nova-color-error)]/20'
                : 'border-[var(--nova-border-default)]',
              sizeClasses[inputSize],
              leftAddon && 'pl-9',
              rightAddon && 'pr-9',
              className,
            )}
            {...rest}
          />
          {rightAddon && (
            <div
              data-nova-test={`${novaTestId}-right-addon`}
              className="pointer-events-none absolute right-3 text-[var(--nova-text-tertiary)]"
            >
              {rightAddon}
            </div>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            data-nova-test={`${novaTestId}-error`}
            className="text-xs text-[var(--nova-color-error)]"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={helperId}
            data-nova-test={`${novaTestId}-helper`}
            className="text-xs text-[var(--nova-text-tertiary)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

NovaInput.displayName = 'NovaInput';
