export const fontFamilies = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
} as const;

export const fontSizes = {
  xs: 'clamp(0.6944rem, 0.6578rem + 0.1829vi, 0.8rem)',
  sm: 'clamp(0.8333rem, 0.7754rem + 0.2899vi, 1rem)',
  base: 'clamp(1rem, 0.9107rem + 0.4464vi, 1.25rem)',
  lg: 'clamp(1.2rem, 1.0661rem + 0.6696vi, 1.5625rem)',
  xl: 'clamp(1.44rem, 1.2445rem + 0.9777vi, 1.9531rem)',
  '2xl': 'clamp(1.728rem, 1.4496rem + 1.392vi, 2.4414rem)',
  '3xl': 'clamp(2.0736rem, 1.6856rem + 1.9402vi, 3.0518rem)',
  '4xl': 'clamp(2.4883rem, 1.957rem + 2.6567vi, 3.8147rem)',
} as const;

export type FontSize = keyof typeof fontSizes;

export const fontWeights = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export type FontWeight = keyof typeof fontWeights;

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
} as const;
