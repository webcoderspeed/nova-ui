import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaSelect, type SelectOption } from './Select';
import { SELECT_TEST_IDS } from './Select.testIds';

const options: SelectOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte', disabled: true },
];

function getTrigger() {
  return screen.getByRole('combobox');
}

function getListbox() {
  return screen.getByRole('listbox');
}

function queryListbox() {
  return screen.queryByRole('listbox');
}

describe('NovaSelect', () => {
  it('renders with placeholder', () => {
    render(<NovaSelect options={options} placeholder="Pick a framework" />);
    expect(screen.getByText('Pick a framework')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<NovaSelect options={options} label="Framework" />);
    expect(screen.getByText('Framework')).toBeInTheDocument();
  });

  it('has correct test IDs', () => {
    render(<NovaSelect options={options} />);
    const trigger = getTrigger();
    expect(trigger).toHaveAttribute('data-nova-test', SELECT_TEST_IDS.trigger);
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<NovaSelect options={options} />);
    await user.click(getTrigger());
    expect(getListbox()).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('selects an option on click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NovaSelect options={options} onChange={onChange} />);

    await user.click(getTrigger());
    await user.click(screen.getByText('Vue'));

    expect(onChange).toHaveBeenCalledWith('vue');
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('closes on Escape', async () => {
    const user = userEvent.setup();
    render(<NovaSelect options={options} />);
    await user.click(getTrigger());
    expect(getListbox()).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(queryListbox()).not.toBeInTheDocument();
  });

  it('renders controlled value', () => {
    render(<NovaSelect options={options} value="angular" />);
    expect(screen.getByText('Angular')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<NovaSelect options={options} error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<NovaSelect options={options} helperText="Choose one" />);
    expect(screen.getByText('Choose one')).toBeInTheDocument();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<NovaSelect options={options} disabled />);
    await user.click(getTrigger());
    expect(queryListbox()).not.toBeInTheDocument();
  });

  it('does not select disabled option', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NovaSelect options={options} onChange={onChange} />);
    await user.click(getTrigger());
    await user.click(screen.getByText('Svelte'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('navigates with arrow keys', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<NovaSelect options={options} onChange={onChange} />);

    const trigger = getTrigger();
    await user.click(trigger);

    // First ArrowDown highlights first option (react), second highlights vue
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenCalledWith('vue');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<NovaSelect options={options} label="Framework" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
