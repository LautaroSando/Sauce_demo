import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30 segundos por test
  expect: {
    timeout: 5000, // 5 segundos para los assertions como expect().toBeVisible()
  },
  fullyParallel: true,
  retries: 0, // 0 = no reintenta si falla
  workers: undefined, // usa número de CPUs disponibles

  use: {
    //baseURL: 'https://www.saucedemo.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // guarda video si falla
    screenshot: 'only-on-failure', // screenshot si falla
    actionTimeout: 0,
    trace: 'on-first-retry', // guarda trace si hay retries
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

  outputDir: 'test-results/', // carpeta donde guarda resultados, screenshots, etc.
});
