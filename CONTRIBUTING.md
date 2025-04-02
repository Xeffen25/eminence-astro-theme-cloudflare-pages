# Working on Eminence Astro Theme for Cloudflare Pages

## Getting started

**Requirements:**

- Node.js version 20 or higher

| Command                                                                       | Description                            |
| ----------------------------------------------------------------------------- | -------------------------------------- |
| `git clone git@github.com:Xeffen25/eminence-astro-theme-cloudflare-pages.git` | Clones the repo to your local computer |
| `npm install`                                                                 | Installs the dependencies with `npm`   |
| `npm run dev`                                                                 | Runs the `dev` command in all packages |

## Context

This site is built using [Astro](https://astro.build/) (a web framework) and deployed on [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Project Structure

## Formatting and Linting

This project uses a combination of tools to ensure consistent code formatting and quality:

- **[Husky](https://typicode.github.io/husky/)**: Husky allows us to use Git hooks as if they were npm scripts. We configure it to run our linting and formatting checks before each commit.
- **[lint-staged](https://github.com/lint-staged/lint-staged)**: lint-staged runs our formatting and linting scripts only on the files that are staged for commit, improving performance and efficiency.
- **[Prettier](https://prettier.io/)**: Prettier is used to automatically format our code according to our project's style guidelines. This ensures that all code in the repository has a consistent look and feel.
- **[ESLint](https://eslint.org/)**: ESLint analyzes our code to find potential errors, enforce coding standards, and improve overall code reliability.

### Commands:

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `npm run format`     | Checks for formatting errors. |
| `npm run format:fix` | Fixes formatting errors.      |
| `npm run lint`       | Checks for linting errors.    |
| `npm run lint:fix`   | Fixes linting errors.         |

### Pre-Commit and CI Checks:

- **Local Pre-Commit Checks:** Husky and lint-staged are configured to automatically run `npm run lint` and `npm run format` on staged files before each commit. This helps catch formatting and linting issues early in the development process. If any issues are found, the commit will be blocked until they are resolved.
- **GitHub Actions Checks:** We also have a GitHub Actions workflow that runs the same linting and formatting checks (`npm run lint` and `npm run format`) on every pull request and push to the repository. This ensures that all code merged into the main branch meets our quality standards, regardless of the developer's local setup.

Please ensure your code passes all linting and formatting checks, both locally and in GitHub Actions, before submitting a pull request.

## Naming conventions

We follow common React naming conventions for filenames, component names, classes, constants, and more.

- For component **filenames** and **class names**, always use `PascalCase`.
- For **non-component filenames**, always use fully lowercase `kebab-case`.
- For **test filenames**, append `.test` before the file extension.
- When declaring **instances** of components, always use `camelCase`.
- When declaring **exported constants**, always use `SCREAMING_SNAKE_CASE`.

| &nbsp;                       | ✅ Valid                                  | 🚫 Invalid                                                                          |
| ---------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| **Component filenames:**     | `ProductTitle.tsx`<br>`ProductTitle.tsx`  | `productTitle.tsx`<br>`product_title.tsx`<br>`product-title.tsx`                    |
| **Non-component filenames:** | `client.ts`<br>`handle-event.ts`          | `Client.ts`<br>`handleEvent.ts`<br>`handle_event.ts`                                |
| **Test filenames:**          | `ExternalVideo.test.tsx`                  | `ExternalVideo-test.tsx`<br>`ExternalVideo_test.tsx`<br>`ExternalVideoTest.tsx`     |
| **Component classes:**       | `<AddToCartButton />`                     | `<addToCartButton />`                                                               |
| **Component instances:**     | `const cartSelector = <CartSelector />`   | `const CartSelector = <CartSelector />`<br>`const cart_selector = <CartSelector />` |
| **Exported constants:**      | `export const CART_COOKIE_TTL_DAYS = 14;` | `export const CartCookieTTLDays = 14;`<br>`export const cart_cookie_ttl_days = 14;` |

## Commit messages

Following the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification) ensures clear and consistent commit messages, improving project maintainability and automation.

### Structure:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

### Types:

| Type       | Description                                    | SemVer Impact |
| ---------- | ---------------------------------------------- | ------------- |
| `fix`      | Bug fix                                        | PATCH         |
| `feat`     | New feature                                    | MINOR         |
| `build`    | Changes affecting build system or dependencies | None          |
| `chore`    | General maintenance tasks                      | None          |
| `ci`       | Changes to CI configuration files and scripts  | None          |
| `docs`     | Documentation changes                          | None          |
| `style`    | Code style changes (whitespace, formatting)    | None          |
| `refactor` | Code refactoring (no functional changes)       | None          |
| `perf`     | Performance improvements                       | None          |
| `test`     | Adding or modifying tests                      | None          |
| `page`     | Changes to specific pages or UI elements       | None          |
| `dep`      | Dependency changes (update/add)                | None          |
| `reformat` | Code reformatting(no functional changes)       | None          |

### Breaking Changes:

Use `!` after type/scope or `BREAKING CHANGE:` in footer.

### SemVer

This convention dovetail with SemVer:

- fix=PATCH
- feat=MINOR
- BREAKING CHANGE=MAJOR.

## Merging PRs

When merging PRs, please select the **Squash and Merge** option, which consolidates all the changes from the PR into a single commit. This helps reduce the commit noise in our Git repository.
