const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const copy = require('rollup-plugin-copy');
const rollup = require('rollup');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const json = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');
const typescriptPlugin = require('rollup-plugin-typescript2');
const typescript = require('typescript');
const glob = require('glob');
const { paramCase } = require('change-case');

const extension = '.tsx';
const filePath = 'src';
const packagePath = path.join(__dirname, 'packages', 'ui-components');

const cleanDirectory = directory =>
  new Promise((resolve, reject) => {
    rimraf(directory, (error, ...args) => {
      if (error) reject(error);
      resolve(...args);
    });
  });

const getFiles = () =>
  new Promise((resolve, reject) => {
    glob(path.join(filePath, '**/*.tsx'), (error, files) => {
      if (error) return reject(error);
      resolve(
        files.filter(
          file => !file.includes('test') && !file.includes('index'),
        ),
      );
    });
  });

const plugins = [
  resolve({ preferBuiltins: true }),
  commonjs(),
  json(),
  postcss({
    modules: true
  }),
  typescriptPlugin({
    typescript,
  }),
  copy({
    "src/styles": "packages/ui-components/styles",
    verbose: true
  })
];

const inputOptions = {
  external: ['react', 'classNames'],
  plugins,
};

const outputOptions = {
  globals: {
    react: 'React',
    classnames: 'classNames',
  },
  sourcemap: true,
  format: 'cjs',
  exports: 'named',
};

(async () => {
  const mainBundle = await rollup.rollup({
    ...inputOptions,
    input: 'src/index.ts',
  });

  mainBundle.write({
    ...outputOptions,
    name: 'UI Components',
    file: 'packages/ui-components/bundledindex.js',
  });
})();
