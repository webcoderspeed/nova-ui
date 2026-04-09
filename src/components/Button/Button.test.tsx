import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaButton } from './Button';
import { BUTTON_TEST_IDS } from './Button.testIds';

describe('NovaButton', () => {
  it('renders with text content', () => {
    render(<NovaButton>Click me</NovaButton>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Click me');
    expect(btn).toHaveAttribute('data-nova-test', BUTTON_TEST_IDS.root);
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<NovaButton onClick={onClick}>Click</NovaButton>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<NovaButton disabled>Click</NovaButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <NovaButton disabled onClick={onClick}>
        Click
      </NovaButton>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders loading state with spinner', () => {
    render(<NovaButton loading>Submit</NovaButton>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('status')).toHaveAttribute('data-nova-test', BUTTON_TEST_IDS.spinner);
  });

  it('does not fire onClick when loading', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <NovaButton loading onClick={onClick}>
        Click
      </NovaButton>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders as anchor when as="a"', () => {
    render(
      <NovaButton as="a" href="/test" novaTestId="link-btn">
        Link
      </NovaButton>,
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-nova-test', 'link-btn');
  });

  it('forwards ref to underlying element', () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement | null>;
    render(<NovaButton ref={ref}>Click</NovaButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toBe(screen.getByRole('button'));
  });

  it('accepts custom novaTestId', () => {
    render(<NovaButton novaTestId="submit-btn">Submit</NovaButton>);
    expect(screen.getByRole('button')).toHaveAttribute('data-nova-test', 'submit-btn');
  });

  it('renders left and right icons', () => {
    render(
      <NovaButton leftIcon={<span>L</span>} rightIcon={<span>R</span>}>
        Text
      </NovaButton>,
    );
    expect(screen.getByText('L').closest('[data-nova-test]')).toHaveAttribute(
      'data-nova-test',
      BUTTON_TEST_IDS.leftIcon,
    );
    expect(screen.getByText('R').closest('[data-nova-test]')).toHaveAttribute(
      'data-nova-test',
      BUTTON_TEST_IDS.rightIcon,
    );
  });

  it('hides icons when loading', () => {
    render(
      <NovaButton loading leftIcon={<span>L</span>} rightIcon={<span>R</span>}>
        Text
      </NovaButton>,
    );
    expect(screen.queryByText('L')).not.toBeInTheDocument();
    expect(screen.queryByText('R')).not.toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { rerender } = render(<NovaButton variant="primary">Btn</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-[var(--nova-color-primary)]');

    rerender(<NovaButton variant="danger">Btn</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-[var(--nova-color-error)]');
  });

  it('applies size classes', () => {
    const { rerender } = render(<NovaButton size="sm">Btn</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<NovaButton size="lg">Btn</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('supports keyboard activation via Enter', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<NovaButton onClick={onClick}>Click</NovaButton>);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalled();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaButton>Click me</NovaButton>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations in loading state', async () => {
    const { container } = render(<NovaButton loading>Loading</NovaButton>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
