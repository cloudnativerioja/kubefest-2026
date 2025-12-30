import { test, expect } from '@playwright/test';

test.describe('KubeFest 2026 Homepage - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#navbar')).toBeVisible();
  });

  test('loads and has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/KubeFest/i);
  });

  test('displays navbar', async ({ page }) => {
    await expect(page.locator('#navbar')).toBeVisible();
  });

  test('displays hero section', async ({ page }) => {
    await expect(page.locator('.hero-bg').first()).toBeVisible();
  });

  test('navigation anchors exist and navigate to sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#navbar')).toBeVisible();

  const navLinks = page.locator('#navbar a[href^="#"]');
  const count = await navLinks.count();
  expect(count).toBeGreaterThan(0);

  const toCheck = Math.min(count, 3);

  for (let i = 0; i < toCheck; i++) {
    const link = navLinks.nth(i);
    await expect(link).toBeVisible();

    const href = await link.getAttribute('href');
    expect(href).toMatch(/^#.+/);

    const targetId = href!.slice(1);
    const target = page.locator(`#${targetId}`);
    await expect(target, `Missing target for ${href}`).toHaveCount(1);


    await link.click();

    await expect(target).toBeInViewport({ timeout: 5000 });
  }
});

  test('displays footer', async ({ page }) => {
    const footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();
  });

  test('has no console errors or page errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    page.on('pageerror', (err) => {
      pageErrors.push(String(err));
    });

    await page.goto('/');
    await expect(page.locator('#navbar')).toBeVisible();

    // filtra ruido típico
    const criticalConsoleErrors = consoleErrors.filter(
      (e) => !e.toLowerCase().includes('favicon')
    );

    expect(
      criticalConsoleErrors,
      `Console errors:\n${criticalConsoleErrors.join('\n')}`
    ).toHaveLength(0);

    expect(pageErrors, `Page errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  });
});

test.describe('KubeFest 2026 Homepage - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#navbar')).toBeVisible();
  });

  test('is responsive: navbar + hero visible', async ({ page }) => {
    await expect(page.locator('#navbar')).toBeVisible();
    await expect(page.locator('.hero-bg').first()).toBeVisible();
  });

  test('mobile burger menu toggles open/close', async ({ page }) => {
    const burgerButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');
    const closeButton = page.locator('#menu-close');

    await expect(burgerButton).toBeVisible();

    await expect(mobileMenu).toBeHidden();
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');

    await burgerButton.click();

    await expect(mobileMenu).toBeVisible();
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');

    await expect(mobileMenu.locator('nav a[href^="#"]').first()).toBeVisible();

    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await expect(mobileMenu).toBeHidden();
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
  });
});
