# Effective TypeScript excercises

This project contains TypeScript files that can be ran individually.

```sh
# Execute the following TypeScript file directly
pnpm exec ts-node src/index.ts
```

## Commands

This project uses the pnpm package manager.

Here are a list of the commands that can be issued:

- `pnpm install`
  - Installs all project dependencies as specified in the `package.json` file.
- `pnpm build`
  - Transforms the TypeScript source code in the `src/` directory into JavaScript, outputting the compiled files into the `dist/` directory.
- `pnpm start`
  - Executes the compiled `index.js` file located in the `dist/` directory.
- `pnpm start:dev`
  - Initiates the development environment by running the TypeScript code directly using ts-node, with nodemon for automatic restarts on file changes.
- `pnpm test`
  - Executes the test suite using vitest.
- `pnpm test:watch`
  - Runs the test suite in watch mode, automatically rerunning tests when source files are modified.
- `pnpm test:coverage`
  - Generates a test coverage report to identify untested parts of the codebase.
