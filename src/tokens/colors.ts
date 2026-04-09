export const globalColors = {
  white: '#ffffff',
  black: '#000000',

  // Blue scale
  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#93c5fd',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#1d4ed8',
  blue800: '#1e40af',
  blue900: '#1e3a8a',
  blue950: '#172554',

  // Neutral scale
  neutral50: '#fafafa',
  neutral100: '#f5f5f5',
  neutral200: '#e5e5e5',
  neutral300: '#d4d4d4',
  neutral400: '#a3a3a3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  neutral950: '#0a0a0a',

  // Red scale
  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',
  red950: '#450a0a',

  // Green scale
  green50: '#f0fdf4',
  green100: '#dcfce7',
  green200: '#bbf7d0',
  green300: '#86efac',
  green400: '#4ade80',
  green500: '#22c55e',
  green600: '#16a34a',
  green700: '#15803d',
  green800: '#166534',
  green900: '#14532d',
  green950: '#052e16',

  // Amber scale
  amber50: '#fffbeb',
  amber100: '#fef3c7',
  amber200: '#fde68a',
  amber300: '#fcd34d',
  amber400: '#fbbf24',
  amber500: '#f59e0b',
  amber600: '#d97706',
  amber700: '#b45309',
  amber800: '#92400e',
  amber900: '#78350f',
  amber950: '#451a03',

  // Indigo scale
  indigo50: '#eef2ff',
  indigo100: '#e0e7ff',
  indigo200: '#c7d2fe',
  indigo300: '#a5b4fc',
  indigo400: '#818cf8',
  indigo500: '#6366f1',
  indigo600: '#4f46e5',
  indigo700: '#4338ca',
  indigo800: '#3730a3',
  indigo900: '#312e81',
  indigo950: '#1e1b4b',
} as const;

export type GlobalColor = keyof typeof globalColors;

export const lightSemanticColors = {
  // Backgrounds
  bgPrimary: globalColors.white,
  bgSecondary: globalColors.neutral50,
  bgTertiary: globalColors.neutral100,
  bgInverse: globalColors.neutral900,

  // Foregrounds / Text
  textPrimary: globalColors.neutral900,
  textSecondary: globalColors.neutral600,
  textTertiary: globalColors.neutral400,
  textInverse: globalColors.white,
  textLink: globalColors.blue600,

  // Brand
  colorPrimary: globalColors.blue600,
  colorPrimaryHover: globalColors.blue700,
  colorPrimaryActive: globalColors.blue800,

  // Semantic
  colorSuccess: globalColors.green600,
  colorWarning: globalColors.amber600,
  colorError: globalColors.red600,
  colorInfo: globalColors.blue500,

  // Borders
  borderDefault: globalColors.neutral200,
  borderStrong: globalColors.neutral300,
  borderFocus: globalColors.blue500,

  // Surfaces
  surfaceRaised: globalColors.white,
  surfaceOverlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export const darkSemanticColors = {
  // Backgrounds
  bgPrimary: globalColors.neutral950,
  bgSecondary: globalColors.neutral900,
  bgTertiary: globalColors.neutral800,
  bgInverse: globalColors.white,

  // Foregrounds / Text
  textPrimary: globalColors.neutral50,
  textSecondary: globalColors.neutral400,
  textTertiary: globalColors.neutral500,
  textInverse: globalColors.neutral900,
  textLink: globalColors.blue400,

  // Brand
  colorPrimary: globalColors.blue500,
  colorPrimaryHover: globalColors.blue400,
  colorPrimaryActive: globalColors.blue300,

  // Semantic
  colorSuccess: globalColors.green500,
  colorWarning: globalColors.amber500,
  colorError: globalColors.red500,
  colorInfo: globalColors.blue400,

  // Borders
  borderDefault: globalColors.neutral800,
  borderStrong: globalColors.neutral700,
  borderFocus: globalColors.blue400,

  // Surfaces
  surfaceRaised: globalColors.neutral900,
  surfaceOverlay: 'rgba(0, 0, 0, 0.7)',
} as const;

export type SemanticColor = keyof typeof lightSemanticColors;
