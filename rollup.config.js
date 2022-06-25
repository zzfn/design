import esbuild from 'rollup-plugin-esbuild';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

const env = process.env.NODE_ENV;

export default {
  input: 'components/index.ts',
  output: [
    {
      file: `dist/index${env === 'production' ? '.min' : ''}.js`,
      format: 'cjs',
    },
    {
      file: `dist/index${env === 'production' ? '.min' : ''}.mjs`,
      format: 'esm',
    },
  ],
  // 将模块视为外部模块，不会打包在库中
  external: ['react', 'react-dom'],
  // 插件
  plugins: [
    esbuild({
      minify: process.env.NODE_ENV === 'production',
    }),
    nodeResolve(),
    commonjs(),
    typescript(),
    scss({
      output: 'dist/bundle.css',
      prefix: '@import "../../styles/response";',
    }),
    postcss({
      plugins: [cssnano()],
    }),
    copy({
      targets: [
        {
          src: ['components/styles/theme.scss'],
          dest: 'dist',
        },
      ],
    }),
  ],
};
