import { clsx } from 'clsx';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { NovaTestProps } from '../../types';
import { DROPDOWN_TEST_IDS } from './Dropdown.testIds';

// ─── Context ────────────────────────────────────────────────────────────────

interface DropdownContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerId: string;
  menuId: string;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdown() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error('Dropdown compound parts must be used inside <NovaDropdown>');
  return ctx;
}

// ─── Root ────────────────────────────────────────────────────────────────────

let _uid = 0;

export interface DropdownProps extends NovaTestProps {
  children: React.ReactNode;
  className?: string;
}

function Root({ children, className, novaTestId = 'dropdown' }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const id = useRef(`nova-dropdown-${++_uid}`);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <DropdownContext.Provider
      value={{
        open,
        setOpen,
        triggerId: `${id.current}-trigger`,
        menuId: `${id.current}-menu`,
      }}
    >
      <div
        ref={rootRef}
        className={clsx('relative inline-block', className)}
        data-nova-test={novaTestId}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

// ─── Trigger ─────────────────────────────────────────────────────────────────

export interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const Trigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className }, ref) => {
    const { open, setOpen, triggerId, menuId } = useDropdown();
    return (
      <button
        ref={ref}
        id={triggerId}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        data-nova-test={DROPDOWN_TEST_IDS.trigger}
        onClick={() => setOpen(!open)}
        className={clsx(
          'inline-flex items-center gap-1.5 rounded-md border border-(--nova-border-default) bg-(--nova-bg-primary) px-3 py-1.5 text-sm font-medium text-(--nova-text-primary) shadow-sm transition-colors hover:bg-(--nova-bg-secondary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--nova-color-primary)',
          className,
        )}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={clsx('transition-transform', open && 'rotate-180')}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    );
  },
);
Trigger.displayName = 'NovaDropdown.Trigger';

// ─── Menu ─────────────────────────────────────────────────────────────────────

export interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
}

function Menu({ children, className, align = 'left' }: DropdownMenuProps) {
  const { open, triggerId, menuId } = useDropdown();
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus management: focus first item when opened
  useEffect(() => {
    if (open) {
      const first = menuRef.current?.querySelector<HTMLElement>(
        '[role="menuitem"]:not([disabled])',
      );
      first?.focus();
    }
  }, [open]);

  // Arrow key navigation within menu
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([disabled])') ?? [],
    );
    const idx = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  }, []);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      id={menuId}
      role="menu"
      aria-labelledby={triggerId}
      data-nova-test={DROPDOWN_TEST_IDS.menu}
      onKeyDown={handleKeyDown}
      className={clsx(
        'absolute top-full z-50 mt-1 min-w-[160px] rounded-lg border border-(--nova-border-default) bg-(--nova-bg-primary) py-1 shadow-lg',
        align === 'right' ? 'right-0' : 'left-0',
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger';
}

const Item = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, onClick, disabled, className, icon, variant = 'default' }, ref) => {
    const { setOpen } = useDropdown();

    function handleClick() {
      if (disabled) return;
      onClick?.();
      setOpen(false);
    }

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={disabled}
        tabIndex={-1}
        onClick={handleClick}
        data-nova-test={DROPDOWN_TEST_IDS.item(typeof children === 'string' ? children : 'item')}
        className={clsx(
          'flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-40',
          variant === 'danger'
            ? 'text-(--nova-color-error) hover:bg-red-50 focus:bg-red-50 dark:hover:bg-red-950/30 dark:focus:bg-red-950/30'
            : 'text-(--nova-text-primary) hover:bg-(--nova-bg-secondary) focus:bg-(--nova-bg-secondary)',
          className,
        )}
      >
        {icon && (
          <span className="size-4 shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </button>
    );
  },
);
Item.displayName = 'NovaDropdown.Item';

// ─── Separator ────────────────────────────────────────────────────────────────

function Separator({ className }: { className?: string }) {
  return (
    <hr
      data-nova-test={DROPDOWN_TEST_IDS.separator}
      className={clsx('my-1 border-t border-(--nova-border-default)', className)}
    />
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'px-3 py-1 text-xs font-semibold tracking-wider text-(--nova-text-tertiary) uppercase',
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Compound export ──────────────────────────────────────────────────────────

export const NovaDropdown = Object.assign(Root, {
  Trigger,
  Menu,
  Item,
  Separator,
  Label,
});
