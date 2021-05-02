import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
const fs=require('fs')
const env = process.env.NODE_ENV;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'components/index.ts',
    output: [{
        file: `lib/index${env === 'production' ? '.min' : ''}.js`,
        format: 'umd',
        name: 'design',
    }],
    // 将模块视为外部模块，不会打包在库中
    external: ['react', 'react-dom'],
    // 插件
    plugins: [
        babel({
            babelHelpers: 'runtime',
            extensions
        }),
        resolve(
            {
                extensions,
            }
        ),
        commonjs(),
        typescript(),
        scss({
            prefix: `@import "../../styles/light-theme";`,
        })
    ],
}
