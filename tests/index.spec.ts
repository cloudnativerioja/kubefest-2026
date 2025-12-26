import { test, expect } from '@playwright/test';

test.describe('KubeFest 2026 Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is present
    await expect(page).toHaveTitle(/KubeFest/i);
  });

  test('should display navbar', async ({ page }) => {
    await page.goto('/');
    
    const navbar = page.locator('#navbar');
    await expect(navbar).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check for hero section (adjust selector based on actual structure)
    const hero = page.locator('.hero-bg').first();
    await expect(hero).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Find all navigation links (both desktop and mobile nav)
    const navLinks = page.locator('nav a[href^="#"]');
    const count = await navLinks.count();
    
    // Test that at least one navigation link exists
    expect(count).toBeGreaterThan(0);
    
    // Test that navigation links have valid hrefs and target elements exist
    for (let i = 0; i < Math.min(count, 3); i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        
        // Verify the target element exists in the DOM
        const targetElement = page.locator(`#${targetId}`);
        const elementExists = await targetElement.count() > 0;
        
        // Verify link is visible and clickable
        await expect(link).toBeVisible();
        
        // Verify target exists (don't test scroll behavior as it varies by browser)
        expect(elementExists).toBe(true);
      }
    }
  });

  test('should display footer', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to bottom to ensure footer is loaded
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Wait a bit for any lazy-loaded content
    await page.waitForTimeout(500);
    
    // Check for footer (adjust selector based on actual structure)
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that navbar is still visible
    const navbar = page.locator('#navbar');
    await expect(navbar).toBeVisible();
    
    // Check that hero section is visible
    const hero = page.locator('.hero-bg').first();
    await expect(hero).toBeVisible();
  });

  test('should display and work mobile burger menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await page.waitForLoadState('networkidle');
    
    // Check that burger menu button is visible on mobile
    const burgerButton = page.locator('#menu-toggle');
    await expect(burgerButton).toBeVisible();
    
    // Check that mobile menu is initially hidden
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/hidden/);
    
    // Check that aria-hidden is true when menu is closed
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
    
    // Click the burger button to open menu
    await burgerButton.click();
    
    // Wait for menu to open - check that hidden class is removed
    await expect(mobileMenu).not.toHaveClass(/hidden/, { timeout: 2000 });
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');
    
    // Verify menu content is visible (check for navigation links)
    const mobileNavLinks = mobileMenu.locator('nav a[href^="#"]');
    const linkCount = await mobileNavLinks.count();
    expect(linkCount).toBeGreaterThan(0);
    
    // Verify at least one navigation link is visible
    if (linkCount > 0) {
      await expect(mobileNavLinks.first()).toBeVisible();
    }
    
    // Verify close button is visible
    const closeButton = page.locator('#menu-close');
    await expect(closeButton).toBeVisible();
    
    // Click close button to close menu
    await closeButton.click();
    
    // Wait for menu to close - check that hidden class is added back
    await expect(mobileMenu).toHaveClass(/hidden/, { timeout: 2000 });
    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'true');
  });

  test('should have no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known non-critical errors if any
    const criticalErrors = consoleErrors.filter(
      error => !error.includes('favicon') // Ignore favicon errors
    );
    
    expect(criticalErrors).toHaveLength(0);
  });
});

