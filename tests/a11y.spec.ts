import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test.describe('Accessibility smoke', () => {
  test('homepage has no serious/critical a11y violations', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#navbar')).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    const seriousOrCritical = results.violations.filter((v) =>
      ['serious', 'critical'].includes(v.impact ?? '')
    );

    expect(seriousOrCritical, JSON.stringify(seriousOrCritical, null, 2)).toHaveLength(0);
  });
});
