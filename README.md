# Eminence Astro Theme for Cloudflare Pages

A better starting point for your Astro projects to be efficiently developed and deployed to Cloudflare Pages.

## Getting Started

If you don't know about this project please check out the [wiki](https://github.com/Xeffen25/eminence-astro-theme-cloudflare-pages/wiki) before starting. It will definetely help you out!

To create your own project use:

```sh
npm create astro@latest -- --template Xeffen25/eminence-astro-theme-cloudflare-pages
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .github/              # Configuration files for GitHub (workflows, issue templates...).
├── .husky/               # Configuration for Husky, Git hooks for code quality.
├── .idx/                 # IDX editor configuration.
├── .vscode/              # VS Code settings and configurations.
├── public/               # Static assets served directly (favicons, images, etc.).
│   ├── images/           # Images used in the project.
│   ├── videos/           # Videos used in the project.
│   └── fonts/            # Custom fonts used in the project.
│   ├── favicons...       # Favicons for different devices and browsers.
├── src/                  # Source code for the Astro project.
│   ├── actions/          # Server actions or API endpoint logic.
│   │   └── index.ts      # Main point for server actions.
│   ├── assets/           # General assets (e.g., SVGs, icons).
│   ├── components/       # Reusable UI components.
│   │   ├── seo/          # SEO related components
│   │   └── util/         # Utility components (SkipToMain...).
│   ├── content/          # Content collections for Astro (e.g., blog posts, documentation).
│   ├── forms/            # Form components and logic.
│   │   ├── action.ts     # Form submission logic.
│   │   ├── component.tsx # React component for the form.
│   │   └── schema.ts     # Data validation schema for the form.
│   ├── layouts/
│   │   └── Layout.astro  # Main layout of the site.
│   ├── lib/              # Utility functions and helper modules.
│   ├── scripts/          # JavaScript scripts for client-side interactions.
│   ├── sections/         # Mirrors src/pages but with folders for each page.
│   ├── styles/           # Global styles and component-specific styles.
│   ├── tests/            # Unit and integration tests.
│   └── types/            # TypeScript type definitions.
├── .dev.vars             # Development environment variables.
├── .gitignore            # Specifies intentionally untracked files that Git should ignore.
├── .prettierrc.mjs       # Configuration for Prettier code formatter.
├── astro.config.mjs      # Configuration file for Astro.
├── CONTRIBUTING.md       # Guidelines for contributing to the project.
├── eslint.config.mjs     # Configuration for ESLint linter.
├── LICENSE.md            # License information for the project.
├── package-lock.json     # Lock file for npm dependencies.
├── package.json          # Project metadata and dependencies.
├── README.md             # Project documentation.
├── tsconfig.json         # TypeScript configuration file.
└── wrangler.jsonc        # Configuration file for Cloudflare.
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run types`           | Generates types for the project                  |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to contribute to this project?

See our [contributing docs](CONTRIBUTING.md)

## Related Docs

- [Astro](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Tailwind](https://tailwindcss.com/docs/installation/using-vite)
- [Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Prettier](https://prettier.io/docs/)
