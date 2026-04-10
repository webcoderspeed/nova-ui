export const DROPDOWN_TEST_IDS = {
  root: 'dropdown',
  trigger: 'dropdown-trigger',
  menu: 'dropdown-menu',
  item: (label: string) => `dropdown-item-${label.toLowerCase().replace(/\s+/g, '-')}`,
  separator: 'dropdown-separator',
} as const;
