'use client';

import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '../../hooks/use-focus-trap';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

interface ModalContextValue {
  open: boolean;
  onClose: () => void;
  titleId: string;
  baseTestId: string;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('Nova Modal compounds must be used within <NovaModal>');
  return ctx;
}

// --- Root ---
interface ModalRootProps extends NovaTestProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function ModalRoot({ open, onClose, novaTestId = 'modal', children }: ModalRootProps) {
  const titleId = useStableId('nova-modal-title');

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <ModalContext.Provider value={{ open, onClose, titleId, baseTestId: novaTestId }}>
      {typeof document !== 'undefined' ? createPortal(children, document.body) : children}
    </ModalContext.Provider>
  );
}

// --- Overlay ---
const ModalOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, ...props }, ref) => {
    const { onClose, baseTestId } = useModalContext();
    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: overlay dismissal is decorative, Escape key handled at root level
      // biome-ignore lint/a11y/noStaticElementInteractions: overlay is a dismissal target
      <div
        ref={ref}
        data-nova-test={novaTestId || `${baseTestId}-overlay`}
        className={cn(
          'fixed inset-0 z-50 animate-[nova-fade-in_var(--nova-duration-fast)] bg-[var(--nova-surface-overlay)]',
          className,
        )}
        onClick={onClose}
        aria-hidden="true"
        {...props}
      />
    );
  },
);
ModalOverlay.displayName = 'NovaModal.Overlay';

// --- Content ---
const ModalContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, children, ...props }, ref) => {
    const { titleId, baseTestId } = useModalContext();
    const contentRef = useRef<HTMLDivElement | null>(null);
    const { open } = useModalContext();
    useFocusTrap(contentRef, open);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: stopPropagation prevents overlay dismiss, keyboard handled at root */}
        <div
          ref={(node) => {
            contentRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          data-nova-test={novaTestId || `${baseTestId}-content`}
          className={cn(
            'relative w-full max-w-lg rounded-[var(--nova-radius-xl)] bg-[var(--nova-surface-raised)] shadow-[var(--nova-shadow-lg)]',
            'animate-[nova-scale-in_var(--nova-duration-normal)_var(--nova-easing-spring)]',
            className,
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);
ModalContent.displayName = 'NovaModal.Content';

// --- Header ---
const ModalHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, ...props }, ref) => {
    const { baseTestId } = useModalContext();
    return (
      <div
        ref={ref}
        data-nova-test={novaTestId || `${baseTestId}-header`}
        className={cn('px-6 pt-6 pb-0', className)}
        {...props}
      />
    );
  },
);
ModalHeader.displayName = 'NovaModal.Header';

// --- Title ---
const ModalTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement> & NovaTestProps
>(({ novaTestId, className, ...props }, ref) => {
  const { titleId, baseTestId } = useModalContext();
  return (
    <h2
      ref={ref}
      id={titleId}
      data-nova-test={novaTestId || `${baseTestId}-title`}
      className={cn('text-lg font-semibold text-[var(--nova-text-primary)]', className)}
      {...props}
    />
  );
});
ModalTitle.displayName = 'NovaModal.Title';

// --- Body ---
const ModalBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, ...props }, ref) => {
    const { baseTestId } = useModalContext();
    return (
      <div
        ref={ref}
        data-nova-test={novaTestId || `${baseTestId}-body`}
        className={cn('px-6 py-4', className)}
        {...props}
      />
    );
  },
);
ModalBody.displayName = 'NovaModal.Body';

// --- Footer ---
const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & NovaTestProps>(
  ({ novaTestId, className, ...props }, ref) => {
    const { baseTestId } = useModalContext();
    return (
      <div
        ref={ref}
        data-nova-test={novaTestId || `${baseTestId}-footer`}
        className={cn('flex items-center justify-end gap-2 px-6 pt-0 pb-6', className)}
        {...props}
      />
    );
  },
);
ModalFooter.displayName = 'NovaModal.Footer';

// --- Close Button ---
const ModalClose = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement> & NovaTestProps>(
  ({ novaTestId, className, children, ...props }, ref) => {
    const { onClose, baseTestId } = useModalContext();
    return (
      <button
        ref={ref}
        type="button"
        aria-label="Close"
        data-nova-test={novaTestId || `${baseTestId}-close`}
        onClick={onClose}
        className={cn(
          'absolute top-4 right-4 rounded-[var(--nova-radius-sm)] p-1 text-[var(--nova-text-tertiary)]',
          'hover:bg-[var(--nova-bg-tertiary)] hover:text-[var(--nova-text-primary)]',
          'outline-none focus-visible:ring-2 focus-visible:ring-[var(--nova-border-focus)]',
          className,
        )}
        {...props}
      >
        {children || (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        )}
      </button>
    );
  },
);
ModalClose.displayName = 'NovaModal.Close';

export const NovaModal = Object.assign(ModalRoot, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
});
