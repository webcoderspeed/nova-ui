export const ACCORDION_TEST_IDS = {
  root: 'accordion',
  item: (value: string) => `accordion-item-${value}`,
  trigger: (value: string) => `accordion-trigger-${value}`,
  content: (value: string) => `accordion-content-${value}`,
} as const;
