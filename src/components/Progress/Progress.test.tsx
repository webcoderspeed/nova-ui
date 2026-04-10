import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaProgress } from './Progress';

describe('NovaProgress', () => {
  it('renders with progressbar role', () => {
    render(<NovaProgress value={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '50');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('uses custom max', () => {
    render(<NovaProgress value={25} max={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemax', '50');
    expect(bar).toHaveAttribute('aria-valuenow', '25');
  });

  it('clamps value to valid range', () => {
    const { rerender } = render(<NovaProgress value={150} max={100} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');

    rerender(<NovaProgress value={-10} max={100} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('shows label when showLabel is true', () => {
    render(<NovaProgress value={75} showLabel />);
    expect(screen.getByText('Progress')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('hides label by default', () => {
    render(<NovaProgress value={75} />);
    expect(screen.queryByText('Progress')).not.toBeInTheDocument();
  });

  it('renders indeterminate state without aria-valuenow', () => {
    render(<NovaProgress value={0} indeterminate />);
    const bar = screen.getByRole('progressbar');
    expect(bar).not.toHaveAttribute('aria-valuenow');
  });

  it('supports size variants', () => {
    const { rerender } = render(<NovaProgress value={50} size="sm" />);
    expect(screen.getByRole('progressbar').className).toContain('h-1');

    rerender(<NovaProgress value={50} size="lg" />);
    expect(screen.getByRole('progressbar').className).toContain('h-3');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaProgress value={60} showLabel />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
