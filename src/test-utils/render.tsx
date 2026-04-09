import { queries, type RenderOptions, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { NovaThemeProvider } from '../hooks/use-theme';
import * as novaQueries from './nova-queries';

const allQueries = { ...queries, ...novaQueries };

interface NovaRenderOptions extends Omit<RenderOptions, 'wrapper' | 'queries'> {
  theme?: 'light' | 'dark';
}

export function renderNova(
  ui: ReactElement,
  { theme = 'light', ...options }: NovaRenderOptions = {},
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <NovaThemeProvider defaultTheme={theme}>{children}</NovaThemeProvider>
  );

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, queries: allQueries, ...options }),
  };
}

export const novaScreen = within(document.body, allQueries);
export const novaWithin = (element: HTMLElement) => within(element, allQueries);

export * from '@testing-library/react';
export { novaScreen as screen, renderNova as render };
