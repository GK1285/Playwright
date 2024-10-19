const {test,expect} = require('@playwright/test')
test('locators',async({page})=>{
await page.goto("https://www.demoblaze.com/index.html")
await page.locator('id=login2').click()
await page.locator('#loginusername').fill("pavanol")
await page.locator('id=loginpassword').fill("test@123")
await page.locator("//button[normalize-space()='Log in']").click()
const logoutlink= await page.locator("//a[normalize-space()='Log out']")
await expect(logoutlink).toBeVisible();
await page.close()
})