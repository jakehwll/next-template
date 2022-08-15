# next-template

This is a glorified fork of [`steve-frenzel/thankyounext`](https://github.com/stevefrenzel/thankyounext). I found myself duplicating this template over-and-over adapting it to my needs, - no longer! This templates comes with many awesome features.

## Features

### Libraries

- [`next.js@12.2`](https://nextjs.org/blog/next-12-2)
- [`styled-components`](https://styled-components.com/docs/basics)

### Components

- `components/Meta.tsx` An SEO-ready component to throw on your pages.
- `pages/_document.tsx` A wrapper element for the `<html>` layout of your site.
- `pages/_error.tsx` A bespoke error page template for Next.JS.
- `pages/404.tsx` A page-not-found error page template for Next.JS.

### Configurations

- `.vscode/settings.json` for auto code-linting and pretty on file save.
- [Typescript](https://www.typescriptlang.org/)
- [ESLint Configuration](https://nextjs.org/docs/basic-features/eslint)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [Pre-commit Git Hook](https://typicode.github.io/husky/#/)
- [Absolute Imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [React Strict Mode](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
- [Security Headers](https://nextjs.org/docs/advanced-features/security-headers)

## Core changes

These are the core differences between `jakehwll/next-template` and `stevefrenzel/thankyounext`.

- Incremented `next` from `12.0` to `12.2` for `_middleware.tsx` and `` support.
- Removed `tailwindcss` and replaced with `styled-components`.
- Removed `preact` due to on-going common issues with libraries.
- Addition of a `.vscode/settings.json`
