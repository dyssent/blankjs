import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from 'rollup-plugin-json'
import react from 'react';
import reactDom from 'react-dom';

const pkg = require('./package.json')

const libraryName = 'blankjs'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.browser, format: 'umd', name: libraryName, sourcemap: true },
    { file: pkg.main, format: 'cjs', name: libraryName, sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    'react',
    'react-dom'
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    peerDepsExternal(),
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom)
      }
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
    filesize()
  ],
}
