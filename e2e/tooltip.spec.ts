import { expect, test } from '@playwright/test';

test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows tooltip on hover', async ({ page }) => {
    const tooltipTrigger = page.getByTestId('tooltip-trigger').first();
    await tooltipTrigger.hover();

    const tooltipContent = page.getByTestId('tooltip-content').first();
    await expect(tooltipContent).toBeVisible();
  });

  test('hides tooltip when mouse leaves', async ({ page }) => {
    const tooltipTrigger = page.getByTestId('tooltip-trigger').first();
    await tooltipTrigger.hover();

    const tooltipContent = page.getByTestId('tooltip-content').first();
    await expect(tooltipContent).toBeVisible();

    // Move mouse away
    await page.mouse.move(0, 0);
    await expect(tooltipContent).not.toBeVisible();
  });

  test('shows tooltip on keyboard focus', async ({ page }) => {
    const tooltipTrigger = page.getByTestId('tooltip-trigger').first();
    await tooltipTrigger.focus();

    const tooltipContent = page.getByTestId('tooltip-content').first();
    await expect(tooltipContent).toBeVisible();
  });
});
