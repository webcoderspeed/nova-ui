import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaAvatar } from './Avatar';
import { AVATAR_TEST_IDS } from './Avatar.testIds';

describe('NovaAvatar', () => {
  it('renders image when src is provided', () => {
    render(<NovaAvatar src="https://example.com/avatar.jpg" alt="User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('data-nova-test', AVATAR_TEST_IDS.image);
  });

  it('renders fallback initials when no src', () => {
    const { container } = render(<NovaAvatar fallback="John Doe" />);
    const fallback = container.querySelector(`[data-nova-test="${AVATAR_TEST_IDS.fallback}"]`);
    expect(fallback).toHaveTextContent('JD');
  });

  it('renders fallback on image error', () => {
    const { container } = render(
      <NovaAvatar src="https://broken.jpg" fallback="Jane Smith" alt="Jane" />,
    );
    const img = screen.getByRole('img');
    fireEvent.error(img);
    const fallback = container.querySelector(`[data-nova-test="${AVATAR_TEST_IDS.fallback}"]`);
    expect(fallback).toHaveTextContent('JS');
  });

  it('renders ? when no fallback name', () => {
    const { container } = render(<NovaAvatar />);
    const fallback = container.querySelector(`[data-nova-test="${AVATAR_TEST_IDS.fallback}"]`);
    expect(fallback).toHaveTextContent('?');
  });

  it('applies size classes', () => {
    const { container } = render(<NovaAvatar size="xl" fallback="AB" />);
    expect(container.querySelector(`[data-nova-test="${AVATAR_TEST_IDS.root}"]`)).toHaveClass(
      'h-16',
      'w-16',
    );
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(<NovaAvatar novaTestId="user-avatar" fallback="X" />);
    expect(container.querySelector('[data-nova-test="user-avatar"]')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement | null>;
    render(<NovaAvatar ref={ref} fallback="T" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaAvatar src="https://example.com/a.jpg" alt="User avatar" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
