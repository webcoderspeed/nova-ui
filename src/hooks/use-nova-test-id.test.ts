import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useNovaTestId } from './use-nova-test-id';

describe('useNovaTestId', () => {
  it('generates test IDs with base path', () => {
    const { result } = renderHook(() => useNovaTestId('modal'));

    expect(result.current.baseTestId).toBe('modal');
    expect(result.current.generateTestId('close-btn')).toBe('modal-close-btn');
    expect(result.current.generateTestId('title')).toBe('modal-title');
  });

  it('supports index option', () => {
    const { result } = renderHook(() => useNovaTestId('tabs'));

    expect(result.current.generateTestId('trigger', { index: 0 })).toBe('tabs-trigger-0');
    expect(result.current.generateTestId('trigger', { index: 2 })).toBe('tabs-trigger-2');
  });

  it('supports variant option', () => {
    const { result } = renderHook(() => useNovaTestId('button'));

    expect(result.current.generateTestId('root', { variant: 'primary' })).toBe(
      'button-root-primary',
    );
  });

  it('supports both index and variant', () => {
    const { result } = renderHook(() => useNovaTestId('select'));

    expect(result.current.generateTestId('option', { index: 1, variant: 'selected' })).toBe(
      'select-option-1-selected',
    );
  });
});
