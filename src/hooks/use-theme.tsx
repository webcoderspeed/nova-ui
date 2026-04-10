'use client';

import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type Brand = 'acefone' | 'smartflo';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  brand: Brand;
  setBrand: (brand: Brand) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'nova-ui-theme';
const BRAND_STORAGE_KEY = 'nova-ui-brand';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

interface NovaThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  defaultBrand?: Brand;
  storageKey?: string;
}

export function NovaThemeProvider({
  children,
  defaultTheme = 'system',
  defaultBrand = 'acefone',
  storageKey = STORAGE_KEY,
}: NovaThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [brand, setBrandState] = useState<Brand>(() => {
    if (typeof window === 'undefined') return defaultBrand;
    return (localStorage.getItem(BRAND_STORAGE_KEY) as Brand) || defaultBrand;
  });

  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey],
  );

  const setBrand = useCallback((newBrand: Brand) => {
    setBrandState(newBrand);
    localStorage.setItem(BRAND_STORAGE_KEY, newBrand);
  }, []);

  // Apply theme classes: html.acefone-light, html.acefone-dark, etc.
  useEffect(() => {
    const root = document.documentElement;
    // Remove all known brand-theme combos
    root.classList.remove(
      'acefone-light',
      'acefone-dark',
      'smartflo-light',
      'smartflo-dark',
      'light',
      'dark',
    );
    // Add the current combo
    root.classList.add(`${brand}-${resolvedTheme}`);
    // Keep data-theme for backwards compat
    root.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme, brand]);

  useEffect(() => {
    if (theme !== 'system') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setThemeState('system');
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, brand, setBrand }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within NovaThemeProvider');
  }
  return ctx;
}
