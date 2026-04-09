import { expect, test } from '@playwright/test';

test.describe('Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens and closes modal via button', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i });
    await openBtn.click();

    const modal = page.getByTestId('modal');
    await expect(modal).toBeVisible();

    const closeBtn = page.getByTestId('modal-close-btn');
    await closeBtn.click();

    await expect(modal).not.toBeVisible();
  });

  test('closes modal on Escape key', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i });
    await openBtn.click();

    const modal = page.getByTestId('modal');
    await expect(modal).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });

  test('traps focus within modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i });
    await openBtn.click();

    const modal = page.getByTestId('modal');
    await expect(modal).toBeVisible();

    // Tab through focusable elements — focus should stay inside modal
    const closeBtn = page.getByTestId('modal-close-btn');
    await expect(closeBtn).toBeFocused();

    // Tab to next focusable element inside modal
    await page.keyboard.press('Tab');

    // Verify focus is still within the modal container
    const focusedInModal = await page.evaluate(() => {
      const modal = document.querySelector('[data-nova-test="modal-content"]');
      return modal?.contains(document.activeElement);
    });
    expect(focusedInModal).toBe(true);
  });

  test('closes modal on overlay click', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open modal/i });
    await openBtn.click();

    const modal = page.getByTestId('modal');
    await expect(modal).toBeVisible();

    // Click the overlay (outside modal content)
    const overlay = page.getByTestId('modal-overlay');
    await overlay.click({ position: { x: 10, y: 10 } });

    await expect(modal).not.toBeVisible();
  });
});
