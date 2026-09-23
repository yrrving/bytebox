import { defineConfig, devices } from '@playwright/test'

// Testerna körs mot den BYGGDA appen, inte dev-servern. Dev-servern injicerar
// egen kod för live-uppdatering som bryter mot CSP:n — det skulle ge falsklarm.
const PORT = 4173
const BASE = `http://localhost:${PORT}/bytebox/`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : [['list']],

  use: {
    baseURL: BASE,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],

  webServer: {
    command: `npm run build && npx vite preview --port ${PORT}`,
    url: BASE,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
