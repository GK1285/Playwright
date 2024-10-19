const {test,expect} =require('@playwright/test');

test('home page',async({page})=>{
  
  await page.goto('https://www.demoblaze.com/index.html');

 const pagetitle=page.title()
 

 await expect(page).toHaveTitle('STORE');

 const pageURL=page.url();
 
 await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  
  await page.close();

})