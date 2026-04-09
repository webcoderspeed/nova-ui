import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaCheckbox } from './Checkbox';

describe('NovaCheckbox', () => {
  it('renders with label', () => {
    render(<NovaCheckbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('toggles on click', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<NovaCheckbox label="Check me" onChange={onChange} />);
    await user.click(screen.getByLabelText('Check me'));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('toggles via Space key', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<NovaCheckbox label="Check me" onChange={onChange} />);
    screen.getByRole('checkbox').focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalled();
  });

  it('supports disabled state', () => {
    render(<NovaCheckbox label="Disabled" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('supports indeterminate state', () => {
    render(<NovaCheckbox label="Indeterminate" indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(<NovaCheckbox novaTestId="terms-check" label="Terms" />);
    expect(container.querySelector('[data-nova-test="terms-check"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="terms-check-input"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaCheckbox label="Accessible" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
