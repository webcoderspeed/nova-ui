export const TABS_TEST_IDS = {
  root: 'tabs',
  list: 'tabs-list',
  trigger: (value: string) => `tabs-trigger-${value}`,
  content: (value: string) => `tabs-content-${value}`,
} as const;
