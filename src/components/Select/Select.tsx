'use client';

import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/use-click-outside';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps, Size } from '../../types/common';
import { cn } from '../../utils/cn';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface NovaSelectProps extends NovaTestProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: 'h-8 px-2 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

export const NovaSelect = forwardRef<HTMLDivElement, NovaSelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = '',
      onChange,
      placeholder = 'Select an option',
      label,
      error,
      helperText,
      disabled = false,
      size = 'md',
      novaTestId = 'select',
      className,
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listboxRef = useRef<HTMLDivElement>(null);
    const id = useStableId('select');

    const selectedValue = controlledValue ?? uncontrolledValue;
    const selectedOption = options.find((o) => o.value === selectedValue);

    useClickOutside(containerRef, () => setIsOpen(false));

    const selectOption = useCallback(
      (optionValue: string) => {
        if (controlledValue === undefined) {
          setUncontrolledValue(optionValue);
        }
        onChange?.(optionValue);
        setIsOpen(false);
      },
      [controlledValue, onChange],
    );

    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case 'Enter':
        case ' ':
        case 'ArrowDown': {
          e.preventDefault();
          setIsOpen(true);
          const firstEnabledIdx = options.findIndex((o) => !o.disabled);
          setHighlightedIndex(firstEnabledIdx >= 0 ? firstEnabledIdx : 0);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          setIsOpen(true);
          const lastEnabledIdx =
            options.length - 1 - [...options].reverse().findIndex((o) => !o.disabled);
          setHighlightedIndex(lastEnabledIdx >= 0 ? lastEnabledIdx : options.length - 1);
          break;
        }
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    const handleListKeyDown = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          setHighlightedIndex((prev) => {
            let next = prev + 1;
            while (next < options.length && options[next]?.disabled) next++;
            return next < options.length ? next : prev;
          });
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          setHighlightedIndex((prev) => {
            let next = prev - 1;
            while (next >= 0 && options[next]?.disabled) next--;
            return next >= 0 ? next : prev;
          });
          break;
        }
        case 'Home': {
          e.preventDefault();
          const firstEnabled = options.findIndex((o) => !o.disabled);
          if (firstEnabled >= 0) setHighlightedIndex(firstEnabled);
          break;
        }
        case 'End': {
          e.preventDefault();
          const lastEnabled =
            options.length - 1 - [...options].reverse().findIndex((o) => !o.disabled);
          if (lastEnabled >= 0) setHighlightedIndex(lastEnabled);
          break;
        }
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const opt = options[highlightedIndex];
          if (opt && !opt.disabled) selectOption(opt.value);
          break;
        }
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    useEffect(() => {
      if (isOpen && listboxRef.current) {
        listboxRef.current.focus();
      }
    }, [isOpen]);

    useEffect(() => {
      if (isOpen && highlightedIndex >= 0) {
        const item = listboxRef.current?.children[highlightedIndex] as HTMLElement | undefined;
        item?.scrollIntoView?.({ block: 'nearest' });
      }
    }, [highlightedIndex, isOpen]);

    return (
      <div ref={ref} data-nova-test={novaTestId} className={cn('relative', className)}>
        {label && (
          <label
            htmlFor={id}
            data-nova-test={`${novaTestId}-label`}
            className="mb-1 block text-sm font-medium text-[var(--nova-text-primary)]"
          >
            {label}
          </label>
        )}

        <div ref={containerRef}>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={`${id}-listbox`}
            aria-labelledby={label ? `${id}-label` : undefined}
            disabled={disabled}
            data-nova-test={`${novaTestId}-trigger`}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleTriggerKeyDown}
            className={cn(
              'flex w-full items-center justify-between rounded-[var(--nova-radius-md)] border bg-[var(--nova-bg-primary)] transition-colors',
              'focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] focus-visible:outline-none',
              error
                ? 'border-[var(--nova-color-error)]'
                : 'border-[var(--nova-border-default)] hover:border-[var(--nova-border-strong)]',
              disabled && 'cursor-not-allowed opacity-50',
              sizeClasses[size],
            )}
          >
            <span
              className={cn(
                'truncate',
                selectedOption
                  ? 'text-[var(--nova-text-primary)]'
                  : 'text-[var(--nova-text-tertiary)]',
              )}
            >
              {selectedOption?.label ?? placeholder}
            </span>
            <svg
              className={cn(
                'ml-2 h-4 w-4 shrink-0 text-[var(--nova-text-secondary)] transition-transform',
                isOpen && 'rotate-180',
              )}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              ref={listboxRef}
              id={`${id}-listbox`}
              role="listbox"
              tabIndex={-1}
              data-nova-test={`${novaTestId}-listbox`}
              onKeyDown={handleListKeyDown}
              className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[var(--nova-radius-md)] border border-[var(--nova-border-default)] bg-[var(--nova-surface-raised)] shadow-[var(--nova-shadow-lg)] outline-none"
            >
              {options.map((option, index) => (
                <div
                  key={option.value}
                  role="option"
                  tabIndex={-1}
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                  data-nova-test={`${novaTestId}-option-${option.value}`}
                  onClick={() => !option.disabled && selectOption(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!option.disabled) selectOption(option.value);
                    }
                  }}
                  onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
                  className={cn(
                    'cursor-pointer px-3 py-2 text-sm transition-colors',
                    option.value === selectedValue &&
                      'bg-[var(--nova-color-primary)] font-medium text-white',
                    index === highlightedIndex &&
                      option.value !== selectedValue &&
                      'bg-[var(--nova-bg-tertiary)]',
                    option.disabled && 'cursor-not-allowed opacity-50',
                    !option.disabled &&
                      option.value !== selectedValue &&
                      'text-[var(--nova-text-primary)]',
                  )}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {error && (
          <p
            data-nova-test={`${novaTestId}-error`}
            className="mt-1 text-sm text-[var(--nova-color-error)]"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            data-nova-test={`${novaTestId}-helper`}
            className="mt-1 text-sm text-[var(--nova-text-secondary)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

NovaSelect.displayName = 'NovaSelect';
