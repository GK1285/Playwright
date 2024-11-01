import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mixam.com/');
  await page.getByRole('button', { name: 'My Account' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Password').click();
  await page.close();
});