/** @format */

// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
const packageJson = require('./package.json');
const path = require('path');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: false,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: false,
      },
      /* CANT USE IT WITH BUNDLE SPLITTING {
        dir: 'dist/umd',
        format: 'umd',
        sourcemap: false,
      }, */
    ],
    plugins: [
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      /*scss( {
        processor: () => postcss(),
        includePaths: [path.join(__dirname, '../../node_modules/'), 'node_modules/'],
        outputStyle: 'compressed',
      } ),*/
      /* postcss({ extract: true, modules: true, use: ['sass'] }), */
      scss({
        // Include SCSS files using the .scss extension
        include: /\.scss$/,
        outputStyle: 'compressed',
        // Output CSS to the specified file
      }),
      resolve(),
      peerDepsExternal(),
      terser(),
      /* babel({ exclude: 'node_modules/**' }), */
    ],
    external: ['react', 'react-dom', [/\.css$/]],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];
