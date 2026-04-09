import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';
import { NovaModal } from './Modal';
import { MODAL_TEST_IDS } from './Modal.testIds';

function renderModal(props = {}) {
  const onClose = vi.fn();
  const result = render(
    <NovaModal open onClose={onClose} {...props}>
      <NovaModal.Overlay />
      <NovaModal.Content>
        <NovaModal.Close />
        <NovaModal.Header>
          <NovaModal.Title>Test Modal</NovaModal.Title>
        </NovaModal.Header>
        <NovaModal.Body>Modal body content</NovaModal.Body>
        <NovaModal.Footer>
          <button type="button">Cancel</button>
          <button type="button">Confirm</button>
        </NovaModal.Footer>
      </NovaModal.Content>
    </NovaModal>,
  );
  return { ...result, onClose };
}

describe('NovaModal', () => {
  it('renders when open', () => {
    renderModal();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal body content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <NovaModal open={false} onClose={vi.fn()}>
        <NovaModal.Content>
          <NovaModal.Body>Hidden</NovaModal.Body>
        </NovaModal.Content>
      </NovaModal>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    renderModal();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby');

    const titleId = dialog.getAttribute('aria-labelledby') as string;
    expect(document.getElementById(titleId)).toHaveTextContent('Test Modal');
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('closes on overlay click', async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();
    const overlay = document.querySelector(
      `[data-nova-test="${MODAL_TEST_IDS.overlay}"]`,
    ) as Element;
    await user.click(overlay);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('does not close when clicking content', async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();
    await user.click(screen.getByText('Modal body content'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('closes on close button click', async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();
    const closeBtn = document.querySelector(
      `[data-nova-test="${MODAL_TEST_IDS.close}"]`,
    ) as Element;
    await user.click(closeBtn);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('close button has accessible label', () => {
    renderModal();
    const closeBtn = document.querySelector(
      `[data-nova-test="${MODAL_TEST_IDS.close}"]`,
    ) as Element;
    expect(closeBtn).toHaveAttribute('aria-label', 'Close');
  });

  it('generates data-nova-test ids from parent', () => {
    renderModal({ novaTestId: 'confirm' });
    expect(document.querySelector('[data-nova-test="confirm-overlay"]')).toBeInTheDocument();
    expect(document.querySelector('[data-nova-test="confirm-content"]')).toBeInTheDocument();
    expect(document.querySelector('[data-nova-test="confirm-title"]')).toBeInTheDocument();
    expect(document.querySelector('[data-nova-test="confirm-body"]')).toBeInTheDocument();
    expect(document.querySelector('[data-nova-test="confirm-footer"]')).toBeInTheDocument();
    expect(document.querySelector('[data-nova-test="confirm-close"]')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = renderModal();
    expect(await axe(container)).toHaveNoViolations();
  });
});
