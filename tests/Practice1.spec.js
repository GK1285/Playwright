import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mixam.com/');
  await page.getByRole('button', { name: 'My Account' }).click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Kunchala');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Goutham');
 // await page.getByLabel('Email Address').click();
 // await page.getByLabel('Password', { exact: true }).click();
});