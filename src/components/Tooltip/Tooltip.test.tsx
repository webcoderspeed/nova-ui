import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaTooltip } from './Tooltip';

describe('NovaTooltip', () => {
  it('shows tooltip on hover', async () => {
    const user = userEvent.setup();
    render(
      <NovaTooltip content="Help text" delay={0}>
        <button type="button">Hover me</button>
      </NovaTooltip>,
    );

    await user.hover(screen.getByRole('button'));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Help text');
  });

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup();
    render(
      <NovaTooltip content="Help text" delay={0}>
        <button type="button">Hover me</button>
      </NovaTooltip>,
    );

    await user.hover(screen.getByRole('button'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.unhover(screen.getByRole('button'));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup();
    render(
      <NovaTooltip content="Focus tip" delay={0}>
        <button type="button">Focus me</button>
      </NovaTooltip>,
    );

    await user.tab();
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Focus tip');
  });

  it('dismisses on Escape', async () => {
    const user = userEvent.setup();
    render(
      <NovaTooltip content="Dismiss me" delay={0}>
        <button type="button">Trigger</button>
      </NovaTooltip>,
    );

    // Focus the button to show tooltip and enable keyboard events
    await user.tab();
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('sets aria-describedby on trigger', async () => {
    const user = userEvent.setup();
    render(
      <NovaTooltip content="Described" delay={0}>
        <button type="button">Trigger</button>
      </NovaTooltip>,
    );

    await user.hover(screen.getByRole('button'));
    await screen.findByRole('tooltip');
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby');
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(
      <NovaTooltip content="Tip" novaTestId="help-tip" delay={0}>
        <button type="button">Btn</button>
      </NovaTooltip>,
    );
    expect(container.querySelector('[data-nova-test="help-tip"]')).toBeInTheDocument();
  });

  it('has no a11y violations when visible', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <NovaTooltip content="Accessible tip" delay={0}>
        <button type="button">Hover</button>
      </NovaTooltip>,
    );

    await user.hover(screen.getByRole('button'));
    await screen.findByRole('tooltip');
    expect(await axe(container)).toHaveNoViolations();
  });
});
