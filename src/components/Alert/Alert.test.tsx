import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaAlert } from './Alert';
import { ALERT_TEST_IDS } from './Alert.testIds';

describe('NovaAlert', () => {
  it('renders with default info variant', () => {
    render(<NovaAlert>This is an info message</NovaAlert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('data-nova-test', ALERT_TEST_IDS.root);
    expect(screen.getByText('This is an info message')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<NovaAlert title="Important">Message body</NovaAlert>);
    expect(screen.getByText('Important')).toBeInTheDocument();
    expect(screen.getByText('Message body')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const variants = ['info', 'success', 'warning', 'error'] as const;
    for (const variant of variants) {
      const { unmount } = render(<NovaAlert variant={variant}>Test</NovaAlert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
      unmount();
    }
  });

  it('renders custom icon', () => {
    render(<NovaAlert icon={<span data-testid="custom-icon">!</span>}>Message</NovaAlert>);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('shows close button when onClose provided', () => {
    const onClose = vi.fn();
    render(<NovaAlert onClose={onClose}>Closable</NovaAlert>);
    expect(screen.getByLabelText('Close alert')).toBeInTheDocument();
  });

  it('does not show close button without onClose', () => {
    render(<NovaAlert>Not closable</NovaAlert>);
    expect(screen.queryByLabelText('Close alert')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<NovaAlert onClose={onClose}>Closable</NovaAlert>);
    await user.click(screen.getByLabelText('Close alert'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <NovaAlert variant="success" title="Success">
        Operation completed
      </NovaAlert>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
