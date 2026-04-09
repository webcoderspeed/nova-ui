import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaRadio, NovaRadioGroup } from './Radio';

describe('NovaRadio', () => {
  it('renders radio group with options', () => {
    render(
      <NovaRadioGroup name="color" value="red">
        <NovaRadio radioValue="red" label="Red" novaTestId="radio-red" />
        <NovaRadio radioValue="blue" label="Blue" novaTestId="radio-blue" />
      </NovaRadioGroup>,
    );

    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByLabelText('Red')).toBeChecked();
    expect(screen.getByLabelText('Blue')).not.toBeChecked();
  });

  it('calls onChange when selecting option', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(
      <NovaRadioGroup name="color" value="red" onChange={onChange}>
        <NovaRadio radioValue="red" label="Red" />
        <NovaRadio radioValue="blue" label="Blue" />
      </NovaRadioGroup>,
    );

    await user.click(screen.getByLabelText('Blue'));
    expect(onChange).toHaveBeenCalledWith('blue');
  });

  it('supports disabled group', () => {
    render(
      <NovaRadioGroup name="color" disabled>
        <NovaRadio radioValue="red" label="Red" />
        <NovaRadio radioValue="blue" label="Blue" />
      </NovaRadioGroup>,
    );

    expect(screen.getByLabelText('Red')).toBeDisabled();
    expect(screen.getByLabelText('Blue')).toBeDisabled();
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(
      <NovaRadioGroup name="test" novaTestId="size-group">
        <NovaRadio radioValue="sm" label="Small" novaTestId="size-sm" />
      </NovaRadioGroup>,
    );

    expect(container.querySelector('[data-nova-test="size-group"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="size-sm"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <NovaRadioGroup name="fruit" value="apple">
        <NovaRadio radioValue="apple" label="Apple" />
        <NovaRadio radioValue="banana" label="Banana" />
      </NovaRadioGroup>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
