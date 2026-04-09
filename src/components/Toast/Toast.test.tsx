import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaToastProvider, useToast } from './Toast';
import { TOAST_TEST_IDS } from './Toast.testIds';

function ToastTrigger({ message = 'Test toast', variant = 'info' as const }) {
  const { toast } = useToast();
  return (
    <button type="button" onClick={() => toast(message, { variant })}>
      Show Toast
    </button>
  );
}

function renderWithProvider(triggerProps = {}) {
  return render(
    <NovaToastProvider>
      <ToastTrigger {...triggerProps} />
    </NovaToastProvider>,
  );
}

describe('NovaToast', () => {
  it('shows toast on trigger', async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByRole('button', { name: 'Show Toast' }));
    expect(screen.getByText('Test toast')).toBeInTheDocument();
  });

  it('shows error toast with alert role', async () => {
    const user = userEvent.setup();
    renderWithProvider({ variant: 'error', message: 'Error occurred' });
    await user.click(screen.getByRole('button', { name: 'Show Toast' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Error occurred');
  });

  it('shows info toast with status role', async () => {
    const user = userEvent.setup();
    renderWithProvider({ variant: 'info', message: 'Info message' });
    await user.click(screen.getByRole('button', { name: 'Show Toast' }));
    expect(screen.getByRole('status')).toHaveTextContent('Info message');
  });

  it('dismisses toast on close click', async () => {
    const user = userEvent.setup();
    renderWithProvider();
    await user.click(screen.getByRole('button', { name: 'Show Toast' }));
    expect(screen.getByText('Test toast')).toBeInTheDocument();

    const dismissBtn = document.querySelector(
      `[data-nova-test="${TOAST_TEST_IDS.dismiss}"]`,
    ) as Element;
    await user.click(dismissBtn);
    expect(screen.queryByText('Test toast')).not.toBeInTheDocument();
  });

  it('auto-dismisses after duration', async () => {
    vi.useFakeTimers();
    renderWithProvider();

    await act(async () => {
      const btn = screen.getByRole('button', { name: 'Show Toast' });
      btn.click();
    });

    expect(screen.getByText('Test toast')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    expect(screen.queryByText('Test toast')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders toast container', async () => {
    renderWithProvider();
    expect(
      document.querySelector(`[data-nova-test="${TOAST_TEST_IDS.container}"]`),
    ).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const user = userEvent.setup();
    const { container } = renderWithProvider();
    await user.click(screen.getByRole('button', { name: 'Show Toast' }));
    expect(await axe(container)).toHaveNoViolations();
  });
});
