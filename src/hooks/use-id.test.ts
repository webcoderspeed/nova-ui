import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { generateId, useStableId } from './use-id';

describe('useStableId', () => {
  it('returns a string with prefix', () => {
    const { result } = renderHook(() => useStableId('nova'));
    expect(result.current).toMatch(/^nova-/);
  });

  it('uses default prefix when none is provided', () => {
    const { result } = renderHook(() => useStableId());
    expect(result.current).toMatch(/^nova-/);
  });

  it('returns a stable id across re-renders', () => {
    const { result, rerender } = renderHook(() => useStableId('test'));
    const firstId = result.current;
    rerender();
    expect(result.current).toBe(firstId);
  });

  it('returns unique ids for different hook instances', () => {
    const { result: result1 } = renderHook(() => useStableId('a'));
    const { result: result2 } = renderHook(() => useStableId('b'));
    expect(result1.current).not.toBe(result2.current);
  });
});

describe('generateId', () => {
  it('returns a string with prefix', () => {
    const id = generateId('custom');
    expect(id).toMatch(/^custom-\d+$/);
  });

  it('uses default prefix', () => {
    const id = generateId();
    expect(id).toMatch(/^nova-\d+$/);
  });

  it('returns unique ids on each call', () => {
    const id1 = generateId('test');
    const id2 = generateId('test');
    expect(id1).not.toBe(id2);
  });
});
