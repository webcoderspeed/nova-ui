import { expect, test } from '@playwright/test';

test.describe('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('switches tabs on click', async ({ page }) => {
    const tabTriggers = page.getByTestId('tabs-trigger');
    const firstTab = tabTriggers.first();
    const secondTab = tabTriggers.nth(1);

    await firstTab.click();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');

    await secondTab.click();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');
  });

  test('navigates tabs with arrow keys', async ({ page }) => {
    const tabTriggers = page.getByTestId('tabs-trigger');
    const firstTab = tabTriggers.first();

    await firstTab.click();
    await firstTab.focus();

    // ArrowRight moves to next tab
    await page.keyboard.press('ArrowRight');

    const secondTab = tabTriggers.nth(1);
    await expect(secondTab).toBeFocused();

    // ArrowLeft moves back
    await page.keyboard.press('ArrowLeft');
    await expect(firstTab).toBeFocused();
  });

  test('displays correct tab content when selected', async ({ page }) => {
    const tabTriggers = page.getByTestId('tabs-trigger');
    const firstTab = tabTriggers.first();

    await firstTab.click();

    const tabContent = page.getByTestId('tabs-content');
    await expect(tabContent.first()).toBeVisible();
  });
});
