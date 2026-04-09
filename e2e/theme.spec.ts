import { expect, test } from '@playwright/test';

test.describe('Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Nova UI/i);
  });

  test('theme toggle switches between light and dark', async ({ page }) => {
    // Find theme toggle buttons
    const darkBtn = page.getByRole('button', { name: /dark/i });

    if (await darkBtn.isVisible()) {
      await darkBtn.click();

      // The html element should have dark class or data-theme attribute
      const htmlEl = page.locator('html');
      const theme = await htmlEl.getAttribute('data-theme');
      expect(theme).toBe('dark');
    }
  });

  test('all playground sections render without errors', async ({ page }) => {
    // Check that key sections exist
    await expect(page.getByText('Button')).toBeVisible();
    await expect(page.getByText('Typography')).toBeVisible();
    await expect(page.getByText('Input')).toBeVisible();
  });
});
