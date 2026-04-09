export const durations = {
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
} as const;

export type Duration = keyof typeof durations;

export const easings = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export type Easing = keyof typeof easings;
