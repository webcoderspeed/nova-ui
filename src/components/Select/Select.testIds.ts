export const SELECT_TEST_IDS = {
  root: 'select',
  trigger: 'select-trigger',
  listbox: 'select-listbox',
  label: 'select-label',
  error: 'select-error',
  helper: 'select-helper',
  option: (value: string) => `select-option-${value}`,
} as const;
