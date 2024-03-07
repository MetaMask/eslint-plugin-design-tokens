import { defineConfig } from 'tsup';

export default defineConfig({
  // The entry to bundle.
  entry: [
    'lib/**/*.ts',
    '!lib/**/__fixtures__/**/*',
    '!lib/**/__mocks__/**/*',
    '!lib/**/__test__/**/*',
    '!lib/**/__tests__/**/*',
    '!lib/**/__snapshots__/**/*',
    '!lib/**/*.test.ts',
    '!lib/**/*.test-d.ts',
    '!lib/**/*.test.*.ts',
  ],

  // The output formats. We want to generate both CommonJS and ESM bundles.
  // https://tsup.egoist.dev/#bundle-formats
  format: ['cjs', 'esm'],

  // Generate sourcemaps as separate files.
  // https://tsup.egoist.dev/#generate-sourcemap-file
  sourcemap: true,

  // Clean the dist folder before bundling.
  clean: true,

  // Enables shimming of `__dirname` and `import.meta.url`, so that they work
  // in both CommonJS and ESM.
  // https://tsup.egoist.dev/#inject-cjs-and-esm-shims
  shims: true,

  // Hide unnecessary logs from the console. Warnings and errors will still be
  // shown.
  silent: true,

  // Split the output into chunks. This is useful for tree-shaking.
  // https://tsup.egoist.dev/#code-splitting
  splitting: true,
});
