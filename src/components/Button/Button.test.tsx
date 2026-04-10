import { act, render, screen } from '@testing-library/react';
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

  it('renders loading with custom icon', () => {
    render(<NovaButton loading={{ icon: <span>⏳</span> }}>Submit</NovaButton>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('⏳')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('delays loading spinner by specified ms', async () => {
    vi.useFakeTimers();
    render(<NovaButton loading={{ delay: 500 }}>Submit</NovaButton>);
    // spinner should not appear immediately
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
    // advance past delay
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    vi.useRealTimers();
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

  it('applies outline variant classes', () => {
    render(<NovaButton variant="outline">Outline</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  it('applies dashed variant with dashed border', () => {
    render(<NovaButton variant="dashed">Dashed</NovaButton>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('border-dashed');
    expect(btn).toHaveClass('bg-transparent');
  });

  it('applies link variant without height', () => {
    render(<NovaButton variant="link">Link</NovaButton>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('h-auto');
    expect(btn).toHaveClass('p-0');
  });

  it('applies danger-outline variant', () => {
    render(<NovaButton variant="danger-outline">Danger Outline</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });

  it('applies xs size', () => {
    render(<NovaButton size="xs">XS</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('h-7');
  });

  it('applies icon size when iconOnly', () => {
    render(<NovaButton iconOnly>X</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('w-10');
  });

  it('renders full width when block', () => {
    render(<NovaButton block>Block</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('applies round shape', () => {
    render(<NovaButton shape="round">Round</NovaButton>);
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });

  it('applies circle shape', () => {
    render(
      <NovaButton shape="circle" iconOnly>
        C
      </NovaButton>,
    );
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });

  it('sets htmlType on native button', () => {
    render(<NovaButton htmlType="submit">Submit</NovaButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('defaults htmlType to button', () => {
    render(<NovaButton>Default</NovaButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('does not set type attribute when rendered as anchor', () => {
    render(
      <NovaButton as="a" href="/x">
        Link
      </NovaButton>,
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('type');
  });
});
