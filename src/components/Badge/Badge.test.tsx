import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaBadge } from './Badge';
import { BADGE_TEST_IDS } from './Badge.testIds';

describe('NovaBadge', () => {
  it('renders with text content', () => {
    render(<NovaBadge>New</NovaBadge>);
    const badge = screen.getByText('New');
    expect(badge).toHaveAttribute('data-nova-test', BADGE_TEST_IDS.root);
  });

  it('renders dot indicator', () => {
    const { container } = render(<NovaBadge dot>Active</NovaBadge>);
    const dot = container.querySelector(`[data-nova-test="${BADGE_TEST_IDS.dot}"]`);
    expect(dot).toBeInTheDocument();
  });

  it('does not render dot by default', () => {
    const { container } = render(<NovaBadge>Default</NovaBadge>);
    const dot = container.querySelector(`[data-nova-test="${BADGE_TEST_IDS.dot}"]`);
    expect(dot).not.toBeInTheDocument();
  });

  it('accepts custom novaTestId', () => {
    render(<NovaBadge novaTestId="status-badge">Online</NovaBadge>);
    expect(screen.getByText('Online')).toHaveAttribute('data-nova-test', 'status-badge');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaBadge>Accessible</NovaBadge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
