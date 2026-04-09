export const TEXT_TEST_IDS = {
  root: 'text',
} as const;

export const HEADING_TEST_IDS = {
  root: 'heading',
  withLevel: (level: number) => `heading-h${level}`,
} as const;
