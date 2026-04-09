import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaTabs } from './Tabs';

describe('NovaTabs', () => {
  const renderTabs = (props = {}) =>
    render(
      <NovaTabs defaultValue="tab1" {...props}>
        <NovaTabs.List>
          <NovaTabs.Trigger value="tab1">Tab 1</NovaTabs.Trigger>
          <NovaTabs.Trigger value="tab2">Tab 2</NovaTabs.Trigger>
          <NovaTabs.Trigger value="tab3">Tab 3</NovaTabs.Trigger>
        </NovaTabs.List>
        <NovaTabs.Content value="tab1">Content 1</NovaTabs.Content>
        <NovaTabs.Content value="tab2">Content 2</NovaTabs.Content>
        <NovaTabs.Content value="tab3">Content 3</NovaTabs.Content>
      </NovaTabs>,
    );

  it('renders with default active tab', () => {
    renderTabs();
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('switches tab on click', async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('calls onChange when tab changes', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    renderTabs({ onChange });
    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
    expect(onChange).toHaveBeenCalledWith('tab2');
  });

  it('supports arrow key navigation', async () => {
    const user = userEvent.setup();
    renderTabs();

    screen.getByRole('tab', { name: 'Tab 1' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveFocus();

    // Wraps around
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveFocus();
  });

  it('supports ArrowLeft navigation', async () => {
    const user = userEvent.setup();
    renderTabs();

    screen.getByRole('tab', { name: 'Tab 1' }).focus();
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveFocus();
  });

  it('supports Home and End keys', async () => {
    const user = userEvent.setup();
    renderTabs();

    screen.getByRole('tab', { name: 'Tab 2' }).focus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveFocus();

    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveFocus();
  });

  it('has correct ARIA attributes', () => {
    renderTabs();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('uses roving tabindex', () => {
    renderTabs();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('tabindex', '-1');
  });

  it('auto-generates data-nova-test ids from parent', () => {
    const { container } = renderTabs({ novaTestId: 'settings' });
    expect(container.querySelector('[data-nova-test="settings"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="settings-list"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="settings-trigger-tab1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="settings-content-tab1"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderTabs();
    expect(await axe(container)).toHaveNoViolations();
  });
});
