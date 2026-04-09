'use client';

import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  baseTestId: string;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Nova Tabs compound components must be used within <NovaTabs>');
  return ctx;
}

// --- Root ---
interface TabsRootProps extends NovaTestProps {
  defaultValue: string;
  value?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

function TabsRoot({
  defaultValue,
  value: controlledValue,
  onChange,
  novaTestId = 'tabs',
  className,
  children,
}: TabsRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const activeTab = controlledValue ?? uncontrolledValue;

  const setActiveTab = (id: string) => {
    if (!controlledValue) setUncontrolledValue(id);
    onChange?.(id);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseTestId: novaTestId }}>
      <div data-nova-test={novaTestId} className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// --- List ---
const TabsList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, ...props }, ref) => {
    const { baseTestId } = useTabsContext();
    return (
      <div
        ref={ref}
        role="tablist"
        data-nova-test={novaTestId || `${baseTestId}-list`}
        className={cn('flex border-b border-[var(--nova-border-default)]', className)}
        {...props}
      />
    );
  },
);
TabsList.displayName = 'NovaTabs.List';

// --- Trigger ---
interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement>, NovaTestProps {
  value: string;
  disabled?: boolean;
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled, novaTestId, className, children, ...props }, ref) => {
    const { activeTab, setActiveTab, baseTestId } = useTabsContext();
    const isActive = activeTab === value;
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const tablist = e.currentTarget.parentElement;
      if (!tablist) return;

      const tabs = Array.from(
        tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'),
      );
      const currentIndex = tabs.indexOf(e.currentTarget);

      let nextIndex = currentIndex;
      if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') nextIndex = 0;
      else if (e.key === 'End') nextIndex = tabs.length - 1;
      else return;

      e.preventDefault();
      const nextTab = tabs[nextIndex];
      nextTab?.focus();
      const nextValue = nextTab?.getAttribute('data-value');
      if (nextValue) setActiveTab(nextValue);
    };

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        data-value={value}
        data-nova-test={novaTestId || `${baseTestId}-trigger-${value}`}
        onClick={() => !disabled && setActiveTab(value)}
        onKeyDown={handleKeyDown}
        className={cn(
          'px-4 py-2 text-sm font-medium transition-colors duration-[var(--nova-duration-fast)] outline-none',
          'focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)] focus-visible:ring-inset',
          isActive
            ? 'border-b-2 border-[var(--nova-color-primary)] text-[var(--nova-color-primary)]'
            : 'text-[var(--nova-text-secondary)] hover:text-[var(--nova-text-primary)]',
          disabled && 'pointer-events-none opacity-50',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
TabsTrigger.displayName = 'NovaTabs.Trigger';

// --- Content ---
interface TabsContentProps extends HTMLAttributes<HTMLDivElement>, NovaTestProps {
  value: string;
}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, novaTestId, className, ...props }, ref) => {
    const { activeTab, baseTestId } = useTabsContext();
    if (activeTab !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-nova-test={novaTestId || `${baseTestId}-content-${value}`}
        className={cn('py-4 outline-none', className)}
        {...props}
      />
    );
  },
);
TabsContent.displayName = 'NovaTabs.Content';

export const NovaTabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
