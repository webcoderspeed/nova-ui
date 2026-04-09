import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaSwitch } from './Switch';

describe('NovaSwitch', () => {
  it('renders with label', () => {
    render(<NovaSwitch label="Dark mode" />);
    expect(screen.getByLabelText('Dark mode')).toBeInTheDocument();
  });

  it('has switch role', () => {
    render(<NovaSwitch label="Toggle" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles on click', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<NovaSwitch label="Toggle" onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('toggles via Space key', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<NovaSwitch label="Toggle" onChange={onChange} />);
    screen.getByRole('switch').focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalled();
  });

  it('supports disabled state', () => {
    render(<NovaSwitch label="Disabled" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(<NovaSwitch novaTestId="theme-switch" label="Theme" />);
    expect(container.querySelector('[data-nova-test="theme-switch"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="theme-switch-input"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="theme-switch-track"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaSwitch label="Accessible toggle" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
