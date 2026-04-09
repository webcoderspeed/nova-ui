export const BUTTON_TEST_IDS = {
  root: 'button',
  spinner: 'button-spinner',
  leftIcon: 'button-left-icon',
  rightIcon: 'button-right-icon',
  withVariant: (v: string) => `button-${v}`,
} as const;
