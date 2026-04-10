'use client';

import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  allowMultiple: boolean;
  baseTestId: string;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error('Nova Accordion compound components must be used within <NovaAccordion>');
  return ctx;
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  itemId: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue | undefined>(undefined);

function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx)
    throw new Error('Nova Accordion Trigger/Content must be used within <NovaAccordion.Item>');
  return ctx;
}

// --- Root ---
interface AccordionRootProps extends NovaTestProps {
  defaultValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  allowMultiple?: boolean;
  children: ReactNode;
  className?: string;
}

function AccordionRoot({
  defaultValue,
  value: controlled,
  onChange,
  allowMultiple = false,
  novaTestId = 'accordion',
  className,
  children,
}: AccordionRootProps) {
  const toSet = (v: string | string[] | undefined): Set<string> => {
    if (!v) return new Set();
    return new Set(Array.isArray(v) ? v : [v]);
  };

  const [internal, setInternal] = useState<Set<string>>(() => toSet(defaultValue));
  const openItems = controlled !== undefined ? toSet(controlled) : internal;

  const toggleItem = (itemValue: string) => {
    const next = new Set(openItems);
    if (next.has(itemValue)) {
      next.delete(itemValue);
    } else {
      if (!allowMultiple) next.clear();
      next.add(itemValue);
    }
    if (controlled === undefined) setInternal(next);
    const arr = Array.from(next);
    onChange?.(allowMultiple ? arr : (arr[0] ?? ''));
  };

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem, allowMultiple, baseTestId: novaTestId }}
    >
      <div
        data-nova-test={novaTestId}
        className={cn('divide-y divide-[var(--nova-border-default)]', className)}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// --- Item ---
interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const { openItems, baseTestId } = useAccordionContext();
    const itemId = useStableId('accordion-item');
    const isOpen = openItems.has(value);

    return (
      <AccordionItemContext.Provider value={{ value, isOpen, itemId }}>
        <div
          ref={ref}
          data-nova-test={`${baseTestId}-item-${value}`}
          data-state={isOpen ? 'open' : 'closed'}
          className={cn('py-2', className)}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = 'NovaAccordion.Item';

// --- Trigger ---
const AccordionTrigger = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { toggleItem, baseTestId } = useAccordionContext();
    const { value, isOpen, itemId } = useAccordionItemContext();

    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${itemId}-content`}
        id={`${itemId}-trigger`}
        data-nova-test={`${baseTestId}-trigger-${value}`}
        onClick={() => toggleItem(value)}
        className={cn(
          'flex w-full items-center justify-between py-3 text-left text-sm font-medium text-[var(--nova-text-primary)] transition-colors outline-none',
          'focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
          'hover:text-[var(--nova-color-primary)]',
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <svg
          className={cn(
            'ml-2 h-4 w-4 shrink-0 transition-transform duration-[var(--nova-duration-fast)]',
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
    );
  },
);
AccordionTrigger.displayName = 'NovaAccordion.Trigger';

// --- Content ---
const AccordionContent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const { baseTestId } = useAccordionContext();
    const { value, isOpen, itemId } = useAccordionItemContext();

    if (!isOpen) return null;

    return (
      <section
        ref={ref}
        id={`${itemId}-content`}
        aria-labelledby={`${itemId}-trigger`}
        data-nova-test={`${baseTestId}-content-${value}`}
        className={cn('pb-3 text-sm text-[var(--nova-text-secondary)]', className)}
        {...props}
      >
        {children}
      </section>
    );
  },
);
AccordionContent.displayName = 'NovaAccordion.Content';

export const NovaAccordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
