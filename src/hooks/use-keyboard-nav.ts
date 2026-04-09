'use client';

import { useCallback } from 'react';

interface UseKeyboardNavOptions {
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  onSelect?: (index: number) => void;
}

function getNextIndex(current: number, total: number, loop: boolean): number {
  const next = current + 1;
  if (next < total) return next;
  return loop ? 0 : current;
}

function getPrevIndex(current: number, total: number, loop: boolean): number {
  const prev = current - 1;
  if (prev >= 0) return prev;
  return loop ? total - 1 : current;
}

export function useKeyboardNav(
  itemCount: number,
  activeIndex: number,
  setActiveIndex: (index: number) => void,
  options: UseKeyboardNavOptions = {},
) {
  const { orientation = 'horizontal', loop = true, onSelect } = options;

  const nextKeys = orientation === 'horizontal' ? ['ArrowRight'] : ['ArrowDown'];
  const prevKeys = orientation === 'horizontal' ? ['ArrowLeft'] : ['ArrowUp'];

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const keyHandlers: Record<string, () => void> = {
        Home: () => setActiveIndex(0),
        End: () => setActiveIndex(itemCount - 1),
        Enter: () => onSelect?.(activeIndex),
        ' ': () => onSelect?.(activeIndex),
      };

      for (const key of nextKeys) {
        keyHandlers[key] = () => setActiveIndex(getNextIndex(activeIndex, itemCount, loop));
      }
      for (const key of prevKeys) {
        keyHandlers[key] = () => setActiveIndex(getPrevIndex(activeIndex, itemCount, loop));
      }

      const handler = keyHandlers[event.key];
      if (handler) {
        event.preventDefault();
        handler();
      }
    },
    [activeIndex, itemCount, loop, nextKeys, prevKeys, onSelect, setActiveIndex],
  );

  return { handleKeyDown };
}
