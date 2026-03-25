# Weather App (React + TypeScript + Vite)

A lightweight weather forecast app built with React, TypeScript and Vite. It uses a search bar to lookup cities, and displays dynamic weather info via custom hooks and context-based theme toggling.

## Prerequisites

- Node.js 18+ (or compatible) installed.
- npm (bundled with Node) or yarn.

## Install dependencies

From project root:

```bash
npm install
```

## Environment configuration

- OpenWeatherMap provide the API for this app. Use the API provided by:
  - Sign in on: https://home.openweathermap.org/users/sign_in
  - Setting up on `src/env/environment.development.ts` in ``APIKeyPrefix`` variable.

## Run app locally

```bash
npm run dev
```

Then open the local address in terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

## Preview build

```bash
npm run preview
```

## Useful commands

- `npm run lint` (if configured)
- `npm run format` (if configured)
