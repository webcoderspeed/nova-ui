import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { describe, expect, it } from 'vitest';
import { useFocusTrap } from './use-focus-trap';

function TrapContainer({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, active);

  return (
    <div ref={ref} data-testid="trap-container">
      <button type="button" data-testid="first">
        First
      </button>
      <button type="button" data-testid="second">
        Second
      </button>
      <button type="button" data-testid="third">
        Third
      </button>
    </div>
  );
}

function TrapWithExternalFocus({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, active);

  return (
    <>
      <button type="button" data-testid="outside">
        Outside
      </button>
      <div ref={ref} data-testid="trap-container">
        <button type="button" data-testid="first">
          First
        </button>
        <button type="button" data-testid="last">
          Last
        </button>
      </div>
    </>
  );
}

describe('useFocusTrap', () => {
  it('focuses the first element when activated', () => {
    render(<TrapContainer active={true} />);
    expect(screen.getByTestId('first')).toHaveFocus();
  });

  it('does not focus when inactive', () => {
    render(<TrapContainer active={false} />);
    expect(screen.getByTestId('first')).not.toHaveFocus();
  });

  it('wraps focus from last to first on Tab', async () => {
    const user = userEvent.setup();
    render(<TrapContainer active={true} />);

    // First element is focused
    expect(screen.getByTestId('first')).toHaveFocus();

    // Tab to second
    await user.tab();
    expect(screen.getByTestId('second')).toHaveFocus();

    // Tab to third
    await user.tab();
    expect(screen.getByTestId('third')).toHaveFocus();

    // Tab should wrap back to first
    await user.tab();
    expect(screen.getByTestId('first')).toHaveFocus();
  });

  it('wraps focus from first to last on Shift+Tab', async () => {
    const user = userEvent.setup();
    render(<TrapContainer active={true} />);

    expect(screen.getByTestId('first')).toHaveFocus();

    // Shift+Tab should wrap to last
    await user.tab({ shift: true });
    expect(screen.getByTestId('third')).toHaveFocus();
  });

  it('restores focus to previously focused element on deactivation', () => {
    const { rerender } = render(<TrapWithExternalFocus active={false} />);

    // Focus the outside button first
    screen.getByTestId('outside').focus();
    expect(screen.getByTestId('outside')).toHaveFocus();

    // Activate trap — focus moves inside
    rerender(<TrapWithExternalFocus active={true} />);
    expect(screen.getByTestId('first')).toHaveFocus();

    // Deactivate trap — focus returns to outside button
    rerender(<TrapWithExternalFocus active={false} />);
    expect(screen.getByTestId('outside')).toHaveFocus();
  });
});
