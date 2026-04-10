import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaSkeleton } from './Skeleton';
import { SKELETON_TEST_IDS } from './Skeleton.testIds';

describe('NovaSkeleton', () => {
  it('renders with default text variant', () => {
    render(<NovaSkeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveAttribute('data-nova-test', SKELETON_TEST_IDS.root);
    expect(skeleton).toHaveAttribute('aria-label', 'Loading');
  });

  it('renders circle variant', () => {
    render(<NovaSkeleton variant="circle" width={40} height={40} />);
    const skeleton = screen.getByRole('status');
    expect(skeleton.className).toContain('rounded-full');
  });

  it('renders rect variant', () => {
    render(<NovaSkeleton variant="rect" width={200} height={100} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies numeric width and height as px', () => {
    render(<NovaSkeleton width={150} height={20} />);
    const skeleton = screen.getByRole('status');
    expect(skeleton.style.width).toBe('150px');
    expect(skeleton.style.height).toBe('20px');
  });

  it('applies string width and height as-is', () => {
    render(<NovaSkeleton width="50%" height="2rem" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton.style.width).toBe('50%');
    expect(skeleton.style.height).toBe('2rem');
  });

  it('supports animation variants', () => {
    const { rerender } = render(<NovaSkeleton animation="pulse" />);
    expect(screen.getByRole('status').className).toContain('animate-pulse');

    rerender(<NovaSkeleton animation="none" />);
    expect(screen.getByRole('status').className).not.toContain('animate-pulse');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaSkeleton variant="rect" width={200} height={20} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
