import { test, expect } from '@playwright/test';

test('Login with email and password', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click the Login / Register button
  const loginRegisterButton = page.locator('button#indivLogin');
  await expect(loginRegisterButton).toBeVisible({ timeout: 20000 });
  await loginRegisterButton.click();

  // Ensure the dropdown is displayed
  const dropdownContainer = page.locator('.navigation-login-dropdown-container');
  await expect(dropdownContainer).toBeVisible({timeout:50000});

  // Click on the Individual login link
  const individualLoginButton = page.locator('a[href^="/action/showLogin?acdl-redirect=true"]');
  await expect(individualLoginButton).toBeVisible({timeout:50000});
  await individualLoginButton.click({timeout:10000});

  // Wait for navigation to the Individual Login page
  //await page.waitForNavigation();
  //expect(page.url()).toBe('https://wiley.scienceconnect.io/login');
  //await page.waitForURL('https://wiley.scienceconnect.io/login', { timeout: 10000 });
  //expect(page.url()).toBe('https://wiley.scienceconnect.io/login');
  
  await page.goto('https://wiley.scienceconnect.io/login',{timeout:20000});

  // Wait for the email input field to be visible
  const emailInput = page.locator('input#email-input');
  await emailInput.waitFor({ state: 'visible', timeout: 10000 });

  //enter the email
 await emailInput.fill('it22062888@my.sliit.lk'); 

  // Click the Continue button after entering the email
  const emailContinueButton = page.locator('button#sign-in-btn');
  await expect(emailContinueButton).toBeVisible({ timeout: 10000 });
  await emailContinueButton.click({timeout:20000});

  // Wait for the password input to be visible and interactable
 const passwordInput = page.locator('input#pass-input');
 await passwordInput.waitFor({ state: 'visible', timeout: 5000 });

  // Enter the password
  await passwordInput.fill('minho12345');

  // Click the final Continue button
 const passwordContinueButton = page.locator('button#password-sign-in-btn');
  await expect(passwordContinueButton).toBeVisible({ timeout: 5000 });
  await passwordContinueButton.click({timeout:20000});

  // Wait for navigation or confirmation
  await page.waitForNavigation();
 // await page.goto('https://onlinelibrary.wiley.com/?logout=true',{timeout:20000}); 
});

