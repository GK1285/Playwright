import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://avplat-local.web.app/signin');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('tejaswi6055@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hainivas');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Setup').click();
  await page.getByRole('textbox').fill('1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Taxes').click();
  await page.getByRole('button', { name: 'add circle' }).click();
  await page.getByLabel('Tax Name *').click();
  await page.getByLabel('Tax Name *').fill('GST3');
  await page.getByText('FixedPercentageFixedFixed,').click();
  await page.getByRole('radio', { name: 'Percentage' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Tax Rate *').click();
  await page.getByLabel('Tax Rate *').fill('54');
  await page.getByText('Overflight Flight Planning').click();
  await page.getByRole('checkbox', { name: 'Overflight' }).click();
  await page.getByRole('checkbox', { name: 'Flight Planning' }).click();
  await page.getByRole('checkbox', { name: 'Fuel' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'ADD', exact: true }).click();
});