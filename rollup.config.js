import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import autoprefixer from "autoprefixer";

export default [
  {
    input: 'components/styles/index.ts',
    output: [
      {
        format: 'esm',
        name: 'map',
        file: 'dist/bundle.min.js',
      },
    ],
    plugins: [
      nodeResolve({
        jsnext: true,
        browser: true,
      }),
      commonjs(),
      typescript(),
      postcss({
        extract: true,
        plugins: [cssnano(),autoprefixer()],
      }),
      copy({
        targets: [
          {
            src: ['components/styles/theme.scss'],
            dest: 'dist',
          },
        ],
      }),
      del({ targets: 'dist/bundle.min.js', verbose: true, hook: 'closeBundle' }),
    ],
  },
];
