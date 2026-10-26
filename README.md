# Pack One Pick One

Informational website for a Magic: The Gathering Cube event in Baltimore.

http://packone-pickone.com/

## Prerequisites

- [Node 24](https://nodejs.org/en/): [nvm](https://github.com/creationix/nvm) is
  recommended for installing and managing Node. After installing, run
  `$ nvm install` in this project directory.
- npm (included with Node.js) to install JavaScript dependencies.

## Setup

In the project directory, install dependencies with:

```sh
$ npm ci
```

Use `nvm use` before running commands. Commit `package-lock.json` with
dependency updates; local setup and GitHub Actions both install from it using
`npm ci`.

## Development

Run the development server with:

```sh
$ npm start
```

View the site in a browser at `http://localhost:8000`

### Validating and Formatting

A few tools are used to enhance and validate JavaScript. It's recommended to
install plugins for these in your text editor if available to validate and
format automatically.

- [TypeScript](https://www.typescriptlang.org) is used to type check JavaScript.
  Run `$ npm run types:check` to check manually.
- [Prettier](https://prettier.io) formats JavaScript and CSS, enforcing
  consistency and reducing incidental changes. Run `$ npm run format` to
  manually format, or `$ npm run format:check` to verify.
- [ESLint](https://eslint.org) checks for some kinds of JavaScript errors and
  consistent style. Run `$ npm run lint` to manually check.

### Updating

After pulling changes, or when switching between branches with different
dependencies, update all installed dependencies with:

```sh
$ npm ci
```

### Dependency compatibility

The site uses Gatsby 5.16 and React 19 on Node 24. ESLint stays on version 9
because `eslint-plugin-react` does not yet support ESLint 10. TypeScript stays
on 5.9 for Gatsby tooling compatibility. `@mdx-js/react` uses version 2 to match
`gatsby-plugin-mdx`'s peer requirement.

Run `npm run build` before `npm run types:check` on a fresh checkout; the build
generates the GraphQL query types. GitHub Actions runs lint, build and type
checks before uploading the site.

Gatsby still brings in deprecated dependencies and security advisories in its
build/development tooling. Run `npm audit` to inspect the current report; do not
use `npm audit fix --force`, which proposes incompatible Gatsby downgrades.
