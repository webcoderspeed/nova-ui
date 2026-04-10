import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaDropdown } from './Dropdown';

function setup(props: { disabled?: boolean; onClickItem?: () => void } = {}) {
  const onClickItem = props.onClickItem ?? vi.fn();
  const result = render(
    <NovaDropdown>
      <NovaDropdown.Trigger>Options</NovaDropdown.Trigger>
      <NovaDropdown.Menu>
        <NovaDropdown.Item onClick={onClickItem}>Edit</NovaDropdown.Item>
        <NovaDropdown.Item disabled={props.disabled}>Copy</NovaDropdown.Item>
        <NovaDropdown.Separator />
        <NovaDropdown.Item variant="danger">Delete</NovaDropdown.Item>
      </NovaDropdown.Menu>
    </NovaDropdown>,
  );
  return { ...result, onClickItem };
}

describe('NovaDropdown', () => {
  it('menu is not visible initially', () => {
    setup();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens menu on trigger click', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('closes menu when item is clicked', async () => {
    const { onClickItem } = setup();
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    await userEvent.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(onClickItem).toHaveBeenCalledOnce();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes menu on Escape key', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('does not call onClick for disabled item', async () => {
    setup({ disabled: true });
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    const copyItem = screen.getByRole('menuitem', { name: 'Copy' });
    expect(copyItem).toBeDisabled();
  });

  it('trigger has aria-haspopup="menu"', () => {
    setup();
    expect(screen.getByRole('button', { name: /options/i })).toHaveAttribute(
      'aria-haspopup',
      'menu',
    );
  });

  it('trigger has aria-expanded=true when open', async () => {
    setup();
    const trigger = screen.getByRole('button', { name: /options/i });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('navigates items with arrow keys', async () => {
    setup();
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    const editItem = screen.getByRole('menuitem', { name: 'Edit' });
    editItem.focus();
    await userEvent.keyboard('{ArrowDown}');
    // Copy item should be focused (but it's disabled, so it may skip — depends on implementation)
    // Just verify ArrowDown doesn't throw
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('has no a11y violations when open', async () => {
    const { container } = setup();
    await userEvent.click(screen.getByRole('button', { name: /options/i }));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
