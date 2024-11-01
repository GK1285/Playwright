const {test, expect}=require('@playwright/test')
const { before } = require('node:test')
test('Assertions',async ({page})=>{
await page.goto('https://demo.nopcommerce.com/register')
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
await expect(page).toHaveTitle('nopCommerce demo store. Register') 
// Logo element to be visible
const logoelement=await page.locator('.header-logo')
await expect(logoelement).toBeVisible()
//search store box to be enabled.
const searchStoreBox=await page.locator('#small-searchterms').click('Goutham')
// radio button to be checked.
const maleRadioButton=await page.locator('#gender-male')
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked()
// check box to be checked.
const newsletterCheckbox=await page.locator('#Newsletter')
await expect(newsletterCheckbox).toBeChecked()
// reg button element has attribute.
await expect(await page.locator('#register-button')).toHaveAttribute('type','submit')
// To have text
await expect(await page.locator('.page-title h1')).toHaveText('Register')
// To contain text
await expect(await page.locator('.page-title h1')).toContainText('Regi')
// To have value
const emailInput=await page.locator('#Email')
await emailInput.fill('kunchalagoutham@yahoo.com')
await expect(emailInput).toHaveValue('kunchalagoutham@yahoo.com')
// To have count
const options=await page.locator('select[name="DateOfBirthMonth"] option')
await expect(options).toHaveCount(13) 



})

