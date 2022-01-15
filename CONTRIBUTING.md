# Contributing to learn-avesta

We'd love to accept your contributions and help make this project even better than it is today!

As a contributor, here are the guidelines we would like you to follow:

- [Getting started](#Getting-started)
- [Commit Messages Guidelines](#Commit-Messages-Guidelines)
- [Documentation Guidelines](#Documentation-Guidelines)
- [Dependencies Guidelines](#Dependencies-Guidelines)
- [Dev mode vs Prod mode](#Dev-mode-versus-production-mode)

## Getting started

### Clone this repository

```bash
git clone https://github.com/hdorgeval/learn-avesta.git
cd learn-avesta
```

### Install dependencies

```bash
npm install
```

### To run the website in dev mode

```bash
npm start
open localhost:3000
```

### To run the website in production mode

```bash
npm run preview
open localhost:5000
```

### Working with VS Code

If you are using VS Code, it is recommended to install the recommended extensions.

## Commit Messages Guidelines

Commit messages should follow the Semantic Commit Messages format:

```txt
label(namespace): title

description

footer
```

### _label_ is one of the following

- `chore` - build-related work, a change in the package.json file, a change in a configuration file or a change to a script file.
- `docs` - changes to docs, e.g. `docs(api.md): ..` to change documentation.
- `feat` - a new feature.
- `fix` - a bug fix.
- `refactor` - a code change that neither fixes a bug nor adds a feature
- `style` - a change in the code style: spaces/alignment/wrapping etc.
- `test` - adding missing tests or correcting existing tests.

2. _namespace_ is put in parentheses after label and is mandatory. Must be lowercase.
3. _title_ is a brief summary of changes.
4. _description_ is **optional**, new-line separated from title and is in present tense.
5. _footer_ is **optional**, new-line separated from _description_ and contains "fixes" / "references" attribution to GitHub issues.
6. _footer_ should also include "BREAKING CHANGE" if current API clients will break due to this change. It should explain what changed and how to get the old behavior.

Example:

```txt
fix(page): fix page.pizza method

This patch fixes page.pizza so that it works with iframes.

Fixes #123, Fixes #234

BREAKING CHANGE: page.pizza now delivers pizza at home by default.
To deliver to a different location, use "deliver" option:
  `page.pizza({deliver: 'work'})`.
```

## Committing strategy

If you are not sure about how to label the commit, or how many files to put in the same commit, you can look at the [commits' history](https://github.com/hdorgeval/learn-avesta/commits/main).

Every commit, once pushed, goes directly into production. So if you are not sure of what you have done, run this npm script before pushing all commits: `auto-commit-skip-netlify`.

## Documentation Guidelines

### Markdown Guidelines

- You should follow this [GitHub Guide on Markdown](https://guides.github.com/features/mastering-markdown/)

### Code Comment

- Comments inside code should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.

## Dependencies Guidelines

For all dependencies (both production and development):

- **Do not add** a dependency if the desired functionality is easily implementable.
- If adding a dependency, it should be well-maintained and trustworthy.

A barrier for introducing new production dependencies is especially high:

- **Do not add** production dependency unless it's critical to project success.

## Dev mode versus Production mode

If you change/add a React component, or if you change any CSS style, please run the website in both dev mode with `npm start` and prod mode with `npm run preview`, and ensure that the website renders the same in both mode.

## Before pushing

Always run the `build` script before pushing:

```bash
npm run build
```
