# KubeFest 2026

A modern event website for KubeFest 2026, built with Astro and Tailwind CSS.

## Tech Stack

- **[Astro](https://astro.build)** - Modern web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Playwright](https://playwright.dev)** - End-to-end testing framework

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (package manager)

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```
   
   The site will be available at `http://localhost:4000`

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Preview the production build:**
   ```bash
   pnpm preview
   ```

## Testing

This project uses [Playwright](https://playwright.dev) for end-to-end testing to ensure the website works correctly across different browsers.

### Running Tests

1. **Run all tests:**
   ```bash
   pnpm test
   ```
   This will run tests in Chromium, Firefox, and WebKit browsers.

2. **Run tests with UI mode (interactive):**
   ```bash
   pnpm test:ui
   ```
   Opens Playwright's UI mode for debugging and watching tests.

3. **Run tests in a specific browser:**
   ```bash
   pnpm exec playwright test --project=chromium
   ```

### CI/CD

Tests run automatically on every pull request via GitHub Actions. The workflow:
- Runs tests in Chromium, Firefox, and WebKit
- Blocks merge if tests fail
- Comments on PRs when tests fail
- Automatically removes failure comments when tests pass

## Development Server

The development server runs on port `4000` by default (configured in `astro.config.mjs`).
