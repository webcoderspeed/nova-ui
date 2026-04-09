import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { NovaThemeProvider, useTheme } from './use-theme';

function createWrapper(defaultTheme: 'light' | 'dark' | 'system' = 'light') {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return <NovaThemeProvider defaultTheme={defaultTheme}>{children}</NovaThemeProvider>;
  };
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('light', 'dark');
  });

  it('throws when used outside NovaThemeProvider', () => {
    expect(() => {
      renderHook(() => useTheme());
    }).toThrow('useTheme must be used within NovaThemeProvider');
  });

  it('provides light theme by default', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    expect(result.current.theme).toBe('light');
    expect(result.current.resolvedTheme).toBe('light');
  });

  it('provides dark theme when set', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    });

    expect(result.current.theme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
  });

  it('allows switching themes', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
  });

  it('persists theme to localStorage', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    act(() => {
      result.current.setTheme('dark');
    });

    expect(localStorage.getItem('nova-ui-theme')).toBe('dark');
  });

  it('sets data-theme attribute on document', () => {
    renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('resolves system theme to light when prefers-color-scheme is light', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('system'),
    });

    expect(result.current.theme).toBe('system');
    // matchMedia is mocked to return false (light) in test-setup
    expect(result.current.resolvedTheme).toBe('light');
  });
});
