<p align="center">
  <img src="https://api.iconify.design/logos:angular-icon.svg" alt="Angular brand" width="100" height="100"/>
</p>

<h1 align="center">Angular Boilerplate</h1>

<br>

<p align='center'>
  <a href="https://angularboilerplate.vercel.app/">Live site (Demo)</a>
</p>

<br>

<br>

![Angular Brand](https://api.iconify.design/logos:angular-icon.svg)

## Overview

This project is based on a repository classified as excellent in terms of Angular architecture. It covers a variety of scenarios, including component rendering via routes, component creation, and component testing. The decision to adopt this boilerplate was made to expedite project development by leveraging optimized configurations and parameters.

## Features

- **Angular 17**: Utilizes the latest Angular features and best practices.
- **PNPM and esbuild**: Efficient tools for package management and project building.
- **Standalone components**: Follows guidelines for creating independent components.
- **Lazy loading**: Implements on-demand loading to optimize performance.
- **PWA (Progressive Web App)**: Adopts best practices to provide a progressive web experience.
- **I18n (Internationalization)**: Uses Transloco for simplified internationalization.
- **TailwindCSS**: Integrates TailwindCSS for flexible and customizable styles.
- **Light/Dark themes**: Supports both light and dark themes for a personalized user experience.

## Prerequisites

- Node.js (version ^16.14.0 or ^18.10.0): [Node.js](https://nodejs.org/en/)
- PNPM: [PNPM](https://pnpm.io/es/)
- Docker (optional): [Docker](https://www.docker.com/)

## Getting Started

1. **Clone the Repository**: `git clone https://github.com/juanmesa2097/angular-boilerplate.git`
2. **Install Dependencies**: `pnpm install` (install PNPM with `pnpm install -g pnpm` if needed)
3. **Run the Project**: `pnpm dev`

## Deployment

- [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/juanmesa2097/angular-boilerplate)
- [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/juanmesa2097/angular-boilerplate)

## Docker

- **Build Project Image**: `docker buildx build -t angular-boilerplate:latest .`
- **Run Project Image**: `docker run --rm -p 8080:80 -d angular-boilerplate:latest`

## Useful Commands

Below are some useful commands for development, testing, linting, and formatting:

```sh
# Start the development server
pnpm dev

# Build production code
pnpm build

# Watch for changes and rebuild
pnpm watch

# Run unit tests
pnpm test

# Run E2E tests (Cypress)
pnpm test:e2e

# Run unit tests in headless mode
pnpm test:headless

# Run linter
pnpm lint

# Run linter and fix errors
pnpm lint:fix

# Run linter on staged files
pnpm lint:staged

# Run style linter
pnpm stylelint

# Run style linter and fix errors
pnpm stylelint:fix

# Format code with Prettier
pnpm format

### Install dependencies

```sh
pnpm install # run `pnpm install -g pnpm` if you don't have pnpm installed
```

### Run project

```sh
pnpm dev
```

## 🐳 Docker

Create an image of the project.

```sh
docker buildx build -t angular-boilerplate:latest .
```

Run the image of the project.

```sh
docker run --rm -p 8080:80 -d angular-boilerplate:latest
```

## 🧙‍♂️ Commands

| Command         | Description                                              | npm                     | yarn                 | pnpm                 |
| --------------- | -------------------------------------------------------- | ----------------------- | -------------------- | -------------------- |
| `dev`           | Starts the development server                            | `npm run dev`           | `yarn dev`           | `pnpm dev`           |
| `dev:host`      | Starts the development server with a custom host         | `npm run dev`           | `yarn dev`           | `pnpm dev`           |
| `build`         | Builds the production code                               | `npm run build`         | `yarn build`         | `pnpm build`         |
| `watch`         | Builds the production code and watches for changes       | `npm run watch`         | `yarn watch`         | `pnpm watch`         |
| `test`          | Runs the unit tests                                      | `npm run test`          | `yarn test`          | `pnpm test`          |
| `test:e2e`      | Open Cypress                                             | `npm run test`          | `yarn test`          | `pnpm test`          |
| `test:headless` | Runs the unit tests in headless mode                     | `npm run test:headless` | `yarn test:headless` | `pnpm test:headless` |
| `lint`          | Runs the linter                                          | `npm run lint`          | `yarn lint`          | `pnpm lint`          |
| `lint:fix`      | Runs the linter and fixes any linting errors             | `npm run lint:fix`      | `yarn lint:fix`      | `pnpm lint:fix`      |
| `lint:staged`   | Runs the linter on staged files                          | `npm run lint:staged`   | `yarn lint:staged`   | `pnpm lint:staged`   |
| `stylelint`     | Runs the style linter                                    | `npm run stylelint`     | `yarn stylelint`     | `pnpm stylelint`     |
| `stylelint:fix` | Runs the style linter and fixes any style linting errors | `npm run stylelint:fix` | `yarn stylelint:fix` | `pnpm stylelint:fix` |
| `format`        | Formats the code with prettier                           | `npm run format`        | `yarn format`        | `pnpm format`        |
