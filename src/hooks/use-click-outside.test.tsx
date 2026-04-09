import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useClickOutside } from './use-click-outside';

function TestComponent({ onClickOutside }: { onClickOutside: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);
  return (
    <div>
      <div ref={ref} data-nova-test="inside">
        Inside
      </div>
      <div data-nova-test="outside">Outside</div>
    </div>
  );
}

describe('useClickOutside', () => {
  it('does not call handler when clicking inside', async () => {
    const handler = vi.fn();
    const user = userEvent.setup();
    render(<TestComponent onClickOutside={handler} />);

    await user.click(screen.getByText('Inside'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('calls handler when clicking outside', async () => {
    const handler = vi.fn();
    const user = userEvent.setup();
    render(<TestComponent onClickOutside={handler} />);

    await user.click(screen.getByText('Outside'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('cleans up listeners on unmount', () => {
    const handler = vi.fn();
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');
    const { unmount } = render(<TestComponent onClickOutside={handler} />);

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});
