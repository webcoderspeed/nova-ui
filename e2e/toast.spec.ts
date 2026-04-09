import { expect, test } from '@playwright/test';

test.describe('Toast', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows toast notification when triggered', async ({ page }) => {
    // Click a toast trigger button
    const toastBtn = page.getByRole('button', { name: /show.*toast/i }).first();
    await toastBtn.click();

    const toast = page.getByTestId('toast').first();
    await expect(toast).toBeVisible();
  });

  test('toast can be dismissed', async ({ page }) => {
    const toastBtn = page.getByRole('button', { name: /show.*toast/i }).first();
    await toastBtn.click();

    const toast = page.getByTestId('toast').first();
    await expect(toast).toBeVisible();

    // Close the toast
    const closeBtn = page.getByTestId('toast-close').first();
    await closeBtn.click();

    await expect(toast).not.toBeVisible();
  });

  test('multiple toasts can be shown', async ({ page }) => {
    const toastBtns = page.getByRole('button', { name: /show.*toast/i });
    const count = await toastBtns.count();

    // Click at least 2 toast buttons
    if (count >= 2) {
      await toastBtns.first().click();
      await toastBtns.nth(1).click();

      const toasts = page.getByTestId('toast');
      await expect(toasts).toHaveCount(2);
    }
  });
});
