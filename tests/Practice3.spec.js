import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://avplat-local.web.app/signin');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('tejaswi6055@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hainivas');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Setup').click();
  await page.getByRole('textbox').fill('1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Handling').click();
  await page.locator ('input[aria-label="search text"]')
  await page.getByLabel('add circle', { exact: true }).getByRole('img').click();
  await page.getByText('Basic Setup').click();
  await page.getByText('Add Station *').click();
  await page.getByRole('searchbox', { name: 'search text' }).fill('vohs');
  await page.getByLabel('radio button off outline').click();
  await page.locator('#ion-overlay-4').getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('FBO/Handler Name *').click();
  await page.getByLabel('FBO/Handler Name *').fill('tejaswi');
  await page.locator('ion-intl-tel-input').getByRole('button').click();
  await page.getByPlaceholder('Enter country name').fill('91');
  await page.getByRole('button', { name: 'radio button off India +' }).click();
  await page.getByPlaceholder('10123').fill('8142012044');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('tejaswi6055@gmail.com');
  await page.getByLabel('From *').click();
  await page.getByRole('button', { name: 'Today, Friday, November 8,' }).click();
  await page.getByLabel('Next page').click();
  await page.getByRole('button', { name: 'Tuesday, December 31,' }).click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.locator('ionic-selectable').filter({ hasText: 'AFN' }).getByRole('button').click();
  await page.getByRole('searchbox', { name: 'search text' }).fill('usd');
  await page.getByRole('button', { name: 'radio button off USD, United' }).click();
  await page.getByText('Add Taxes').click();
  await page.getByLabel('radio button off outline').click();
  await page.locator('#ion-overlay-7').getByRole('button', { name: 'Continue' }).click();
  await page.click('ion-button[fill="full"][custom-submit-button]')
  await page.getByText('Price Setup').click();
  await page.getByRole('textbox', { name: 'Enter weight' }).click();
  await page.getByRole('textbox', { name: 'Enter weight' }).fill('4');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByText('- 4').click();
  await page.locator('.handling-item-design > .item-native > .item-inner').first().click();
  await page.getByLabel('arrow back').click();
  await page.getByText('Tech Stop').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('45');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Transit Stop').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Stayover').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('12');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Toilet').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Water').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('ion-item-sliding:nth-child(6) > .handling-item-design > .item-native > .item-inner > .input-wrapper').click();
  await page.getByText('Towing').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('3');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Pushback').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('4');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Air Starter').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('5');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Cabin Cleaning').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('6');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Aircraft Exterior Cleaning').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('7');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('- Above').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('.ion-no-padding > div > ion-list > .item > .item-native > .item-inner > .input-wrapper').click();
  await page.getByText('Crew Transport').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('VIP Lounge').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.ion-no-padding > ion-item-sliding:nth-child(16) > ion-item > .item-native > .item-inner > .input-wrapper').click();
  await page.getByText('Passenger CIQ').click();
  await page.getByText('GENDEC/APIS/CIQCIQ Aboard').click();
  await page.getByRole('radio', { name: 'GENDEC/APIS/CIQ' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('3');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Pax Transport').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('4');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('ACU').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('5');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('GPU').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('6');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Airside Transport').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('7');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Oxygen Cart').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('8');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Nitrogen Cart').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('9');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Conveyor Belt').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Forklift 5T % 9T').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Scissor Lift').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Hangar Supervision').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('High Loader (Capacity7T)').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('3');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Maintenance Stand').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('4');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Maintenance Stairs (Upto 6').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('5');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Passenger Stairs').click();
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('6');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Surcharges').click();
  await page.getByText('Communication').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Night').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('2');
  await page.getByLabel('Night Surcharge Start Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByLabel('Night Surcharge End Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Outside Airport Operational').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('1');
  await page.getByLabel('Airport Operational Hour Start Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByLabel('Airport Operational Hour End').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Outside Office Operational').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('3');
  await page.getByLabel('Airport Office Hour Start Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByLabel('Airport Office Hour Start Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByLabel('Airport Office Hour End Time').click();
  await page.getByRole('button', { name: 'Set', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Supervision Charge').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('2');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Third Party Disbursement').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('3');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Weekend').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('4');
  await page.getByText('Sunday Monday Tuesday Wednesday Thursday Friday Saturday Weekend Day 1').click();
  await page.getByRole('radio', { name: 'Sunday' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Sunday Monday Tuesday Wednesday Thursday Friday Saturday Weekend Day 2 (').click();
  await page.getByRole('radio', { name: 'Tuesday' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Holiday').click();
  await page.getByLabel('Surcharge Price').click();
  await page.getByLabel('Surcharge Price').fill('2');
  await page.getByLabel('Holiday Name').click();
  await page.getByLabel('Holiday Name').fill('qwerrt');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Peak Period').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('23');
  await page.getByLabel('Peak Period Name').click();
  await page.getByLabel('Peak Period Name').fill('qwerqw');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Peak Hour').click();
  await page.getByLabel('Surcharge', { exact: true }).click();
  await page.getByLabel('Surcharge', { exact: true }).fill('23');
  await page.getByLabel('Peak Hour Name').click();
  await page.getByLabel('Peak Hour Name').fill('qwerwr');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});