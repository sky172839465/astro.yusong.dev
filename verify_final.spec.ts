import { test, expect } from '@playwright/test';

test('verify homepage and dark mode', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page).toHaveTitle(/YUSONG.DEV/);
  await page.screenshot({ path: 'final_home_light.png' });

  // Toggle dark mode
  await page.click('button[aria-haspopup="menu"]');
  await page.waitForTimeout(1000); // Wait for animation
  await page.screenshot({ path: 'dropdown_open.png' });

  // Try to click Dark by role if text fails
  const darkItem = page.getByRole('menuitem', { name: 'Dark' });
  await darkItem.click();

  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'final_home_dark.png' });

  // Check if .dark class is added to html
  const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log('Is dark mode active:', isDark);
});

test('verify blog post', async ({ page }) => {
  await page.goto('http://localhost:4321/blog/jp2025-note/');
  await page.screenshot({ path: 'final_blog_post.png' });
});
