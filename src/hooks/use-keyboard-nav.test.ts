import { renderHook } from '@testing-library/react';
import type { KeyboardEvent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useKeyboardNav } from './use-keyboard-nav';

function createKeyEvent(key: string): KeyboardEvent {
  return { key, preventDefault: vi.fn() } as unknown as KeyboardEvent;
}

describe('useKeyboardNav', () => {
  it('returns a handleKeyDown function', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 0, setActiveIndex));
    expect(typeof result.current.handleKeyDown).toBe('function');
  });

  it('moves to next index on ArrowRight (horizontal)', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 0, setActiveIndex));
    const event = createKeyEvent('ArrowRight');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).toHaveBeenCalledWith(1);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('moves to previous index on ArrowLeft (horizontal)', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 1, setActiveIndex));
    const event = createKeyEvent('ArrowLeft');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).toHaveBeenCalledWith(0);
  });

  it('loops to first index when at end', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 2, setActiveIndex, { loop: true }));
    const event = createKeyEvent('ArrowRight');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).toHaveBeenCalledWith(0);
  });

  it('stays at end when loop is disabled', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 2, setActiveIndex, { loop: false }));
    const event = createKeyEvent('ArrowRight');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).toHaveBeenCalledWith(2);
  });

  it('loops to last index when at start', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 0, setActiveIndex, { loop: true }));
    const event = createKeyEvent('ArrowLeft');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).toHaveBeenCalledWith(2);
  });

  it('uses ArrowDown/ArrowUp for vertical orientation', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() =>
      useKeyboardNav(3, 0, setActiveIndex, { orientation: 'vertical' }),
    );

    result.current.handleKeyDown(createKeyEvent('ArrowDown'));
    expect(setActiveIndex).toHaveBeenCalledWith(1);

    setActiveIndex.mockClear();
    const { result: result2 } = renderHook(() =>
      useKeyboardNav(3, 1, setActiveIndex, { orientation: 'vertical' }),
    );
    result2.current.handleKeyDown(createKeyEvent('ArrowUp'));
    expect(setActiveIndex).toHaveBeenCalledWith(0);
  });

  it('navigates to first on Home key', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(5, 3, setActiveIndex));
    result.current.handleKeyDown(createKeyEvent('Home'));
    expect(setActiveIndex).toHaveBeenCalledWith(0);
  });

  it('navigates to last on End key', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(5, 1, setActiveIndex));
    result.current.handleKeyDown(createKeyEvent('End'));
    expect(setActiveIndex).toHaveBeenCalledWith(4);
  });

  it('calls onSelect on Enter key', () => {
    const setActiveIndex = vi.fn();
    const onSelect = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 1, setActiveIndex, { onSelect }));
    result.current.handleKeyDown(createKeyEvent('Enter'));
    expect(onSelect).toHaveBeenCalledWith(1);
  });

  it('calls onSelect on Space key', () => {
    const setActiveIndex = vi.fn();
    const onSelect = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 2, setActiveIndex, { onSelect }));
    result.current.handleKeyDown(createKeyEvent(' '));
    expect(onSelect).toHaveBeenCalledWith(2);
  });

  it('does nothing for unhandled keys', () => {
    const setActiveIndex = vi.fn();
    const { result } = renderHook(() => useKeyboardNav(3, 0, setActiveIndex));
    const event = createKeyEvent('a');
    result.current.handleKeyDown(event);
    expect(setActiveIndex).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
