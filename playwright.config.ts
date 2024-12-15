import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
  },
  reporter: [['html', { outputFolder: 'test-results' }]],
});
