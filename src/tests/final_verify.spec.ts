import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 720 } });

test('blog index dark mode', async ({ page }) => {
  await page.goto('http://localhost:4321/blog');
  await page.evaluate(() => {
    localStorage.setItem('theme', '"dark"');
    document.documentElement.classList.add('dark');
  });
  await page.reload();
  await page.screenshot({ path: '/home/jules/verification/blog_dark_final.png' });
});

test('footer styling', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await page.evaluate(() => {
    localStorage.setItem('theme', '"dark"');
    document.documentElement.classList.add('dark');
  });
  await page.reload();
  await page.screenshot({ path: '/home/jules/verification/footer_dark_final.png' });
});
