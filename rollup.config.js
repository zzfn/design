import babel from '@rollup/plugin-babel'
import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
import copy from 'rollup-plugin-copy'

const env = process.env.NODE_ENV
const extensions = ['.ts', '.tsx', '.js', '.jsx']

export default {
  input: 'components/index.ts',
  output: [
    {
      file: `dist/index${env === 'production' ? '.min' : ''}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/index${env === 'production' ? '.min' : ''}.esm.js`,
      format: 'esm'
    }
  ],
  // 将模块视为外部模块，不会打包在库中
  external: ['react', 'react-dom'],
  // 插件
  plugins: [
    esbuild({
      minify: process.env.NODE_ENV === 'production'
    }),
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      exclude: 'node_modules/**'
    }),
    typescript(),
    scss({
      output: 'dist/bundle.css',
      prefix: '@import "../../styles/response";'
    }),
    copy({
      targets: [
        {
          src: ['components/styles/variable_dark.scss', 'components/styles/variable_light.scss', 'components/styles/theme.scss'],
          dest: 'dist'
        }
      ]
    })
  ]
}
