import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaAccordion } from './Accordion';

function renderAccordion(props: Partial<Parameters<typeof NovaAccordion>[0]> = {}) {
  return render(
    <NovaAccordion {...props}>
      <NovaAccordion.Item value="one">
        <NovaAccordion.Trigger>Item One</NovaAccordion.Trigger>
        <NovaAccordion.Content>Content One</NovaAccordion.Content>
      </NovaAccordion.Item>
      <NovaAccordion.Item value="two">
        <NovaAccordion.Trigger>Item Two</NovaAccordion.Trigger>
        <NovaAccordion.Content>Content Two</NovaAccordion.Content>
      </NovaAccordion.Item>
    </NovaAccordion>,
  );
}

describe('NovaAccordion', () => {
  it('renders all items', () => {
    renderAccordion();
    expect(screen.getByText('Item One')).toBeInTheDocument();
    expect(screen.getByText('Item Two')).toBeInTheDocument();
  });

  it('content is hidden by default', () => {
    renderAccordion();
    expect(screen.queryByText('Content One')).not.toBeInTheDocument();
    expect(screen.queryByText('Content Two')).not.toBeInTheDocument();
  });

  it('opens item on click', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByText('Item One'));
    expect(screen.getByText('Content One')).toBeInTheDocument();
  });

  it('closes item on second click', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByText('Item One'));
    expect(screen.getByText('Content One')).toBeInTheDocument();
    await user.click(screen.getByText('Item One'));
    expect(screen.queryByText('Content One')).not.toBeInTheDocument();
  });

  it('closes other items when opening a new one (single mode)', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByText('Item One'));
    await user.click(screen.getByText('Item Two'));
    expect(screen.queryByText('Content One')).not.toBeInTheDocument();
    expect(screen.getByText('Content Two')).toBeInTheDocument();
  });

  it('allows multiple items open with allowMultiple', async () => {
    const user = userEvent.setup();
    renderAccordion({ allowMultiple: true });
    await user.click(screen.getByText('Item One'));
    await user.click(screen.getByText('Item Two'));
    expect(screen.getByText('Content One')).toBeInTheDocument();
    expect(screen.getByText('Content Two')).toBeInTheDocument();
  });

  it('respects defaultValue', () => {
    renderAccordion({ defaultValue: 'one' });
    expect(screen.getByText('Content One')).toBeInTheDocument();
  });

  it('fires onChange when toggling', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderAccordion({ onChange });
    await user.click(screen.getByText('Item One'));
    expect(onChange).toHaveBeenCalledWith('one');
  });

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup();
    renderAccordion();
    const trigger = screen.getByText('Item One').closest('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(screen.getByText('Item One'));
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <NovaAccordion defaultValue="one">
        <NovaAccordion.Item value="one">
          <NovaAccordion.Trigger>Question 1</NovaAccordion.Trigger>
          <NovaAccordion.Content>Answer 1</NovaAccordion.Content>
        </NovaAccordion.Item>
      </NovaAccordion>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
