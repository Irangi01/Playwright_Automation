import { test, expect } from '@playwright/test';

test('Browse journals and filter it', async ({ page }) => {
  // Step 1: Navigate to the Wiley website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Step 2: Click on the "2,000+ Journals" link
  const journalsLink = page.locator('a[title="Browse journals"]');
  await journalsLink.click();

  // Step 3: Add assertions to ensure the correct page is loaded
  await page.waitForLoadState('load');  // Ensure the page is fully loaded

  // Step 4: Wait for the dropdown to be visible and click to open it
  const alphaDropdown = page.locator('#alphabetRange');
  await alphaDropdown.click();  // Click to open the dropdown

  // Step 5: Select an option from the dropdown (e.g., selecting '0-9')
  await alphaDropdown.selectOption({ value: '/action/showPublications?PubType=journal&startPage=&alphabetRange=0-9' });

  // Step 6: Add assertion to ensure the correct filtering occurs
  //kavishka 
  await expect(page).toHaveURL(/.*alphabetRange=0-9/);  // Verify the URL after selecting the option
});
