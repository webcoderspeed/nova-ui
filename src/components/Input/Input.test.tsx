import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaInput } from './Input';
import { INPUT_TEST_IDS } from './Input.testIds';

describe('Input', () => {
  it('renders with label', () => {
    render(<NovaInput label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByText('Email').closest('[data-nova-test]')).toHaveAttribute(
      'data-nova-test',
      INPUT_TEST_IDS.label,
    );
  });

  it('renders without label', () => {
    const { container } = render(<NovaInput placeholder="Search..." />);
    expect(
      container.querySelector(`[data-nova-test="${INPUT_TEST_IDS.label}"]`),
    ).not.toBeInTheDocument();
  });

  it('handles controlled input', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<NovaInput label="Name" value="hello" onChange={onChange} />);

    await user.type(screen.getByLabelText('Name'), 'x');
    expect(onChange).toHaveBeenCalled();
  });

  it('handles uncontrolled input', async () => {
    const user = userEvent.setup();
    render(<NovaInput label="Name" defaultValue="hello" />);

    const input = screen.getByLabelText('Name');
    await user.clear(input);
    await user.type(input, 'world');
    expect(input).toHaveValue('world');
  });

  it('shows error state', () => {
    render(<NovaInput label="Email" error="Email is required" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('shows helper text', () => {
    render(<NovaInput label="Email" helperText="We won't share your email" />);
    expect(screen.getByText("We won't share your email")).toBeInTheDocument();
  });

  it('hides helper text when error is shown', () => {
    render(<NovaInput label="Email" helperText="Help text" error="Error text" />);
    expect(screen.queryByText('Help text')).not.toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<NovaInput label="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<NovaInput label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<NovaInput ref={ref} label="Email" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('accepts custom novaTestId', () => {
    const { container } = render(<NovaInput novaTestId="email-input" label="Email" />);
    expect(container.querySelector('[data-nova-test="email-input"]')).toBeInTheDocument();
    expect(container.querySelector('[data-nova-test="email-input-field"]')).toBeInTheDocument();
  });

  it('renders addons', () => {
    const { container } = render(
      <NovaInput leftAddon={<span>@</span>} rightAddon={<span>.com</span>} />,
    );
    expect(
      container.querySelector(`[data-nova-test="${INPUT_TEST_IDS.leftAddon}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[data-nova-test="${INPUT_TEST_IDS.rightAddon}"]`),
    ).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaInput label="Email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations with error', async () => {
    const { container } = render(<NovaInput label="Email" error="Required" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
