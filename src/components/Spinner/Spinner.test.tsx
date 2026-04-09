import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaSpinner } from './Spinner';
import { SPINNER_TEST_IDS } from './Spinner.testIds';

describe('NovaSpinner', () => {
  it('renders with default test id', () => {
    render(<NovaSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('data-nova-test', SPINNER_TEST_IDS.root);
  });

  it('has accessible label', () => {
    render(<NovaSpinner />);
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });

  it('accepts custom novaTestId', () => {
    render(<NovaSpinner novaTestId="btn-spinner" />);
    expect(screen.getByRole('status')).toHaveAttribute('data-nova-test', 'btn-spinner');
  });

  it('applies size classes', () => {
    const { rerender } = render(<NovaSpinner size="sm" />);
    expect(screen.getByRole('status')).toHaveClass('h-4', 'w-4');

    rerender(<NovaSpinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('h-8', 'w-8');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaSpinner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
