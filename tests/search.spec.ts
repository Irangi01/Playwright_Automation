import { test, expect } from '@playwright/test';

test('Perform a search on Wiley online library website', async ({ page }) => {
  
  //navigate to the website
  await page.goto('https://onlinelibrary.wiley.com/');

  
  const searchInput = page.locator('#searchField1');
  await expect(searchInput).toBeVisible({ timeout: 50000 });

  // Type the search query into the input field
  await searchInput.fill('sample search',{ timeout: 50000 }); 
  const searchButton = page.locator('button[aria-label="Submit Search"]');

  // Ensure the search button is visible
  await expect(searchButton).toBeVisible({ timeout: 5000 });

  // Click the search button
  await searchButton.click();

  //wait for navigation
  await page.waitForNavigation();
  
});

