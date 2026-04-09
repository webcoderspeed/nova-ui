'use client';

import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useStableId } from '../../hooks/use-id';
import type { NovaTestProps } from '../../types/common';
import { cn } from '../../utils/cn';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps extends NovaTestProps {
  content: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  children: ReactElement;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function NovaTooltip({
  content,
  position = 'top',
  delay = 200,
  novaTestId = 'tooltip',
  className,
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const tooltipId = useStableId('nova-tooltip');

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') hide();
    },
    [hide],
  );

  const triggerProps = {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    onKeyDown: handleKeyDown,
    'aria-describedby': visible ? tooltipId : undefined,
  };

  return (
    <div data-nova-test={novaTestId} className="relative inline-flex">
      {isValidElement(children) && cloneElement(children, triggerProps as Record<string, unknown>)}
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          data-nova-test={`${novaTestId}-content`}
          className={cn(
            'absolute z-50 whitespace-nowrap rounded-[var(--nova-radius-md)] px-3 py-1.5 text-xs font-medium',
            'bg-[var(--nova-bg-inverse)] text-[var(--nova-text-inverse)]',
            'animate-[nova-fade-in_var(--nova-duration-fast)]',
            'pointer-events-none',
            positionClasses[position],
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
