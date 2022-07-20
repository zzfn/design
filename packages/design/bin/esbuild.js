const postcssPlugin = require('./esbuild-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const fs = require('fs/promises');
const path = require('path');
async function handleAssets() {
  await fs.copyFile(
    path.join(__dirname, '../components/styles/theme.scss'),
    path.join(__dirname, '../dist/theme.scss'),
  );
  await fs.copyFile(
    path.join(__dirname, '../dist/styles/index.css'),
    path.join(__dirname, '../dist/bundle.min.css'),
  );
  await fs.rm(path.join(__dirname, '../dist/styles/index.css'));
  await fs.rm(path.join(__dirname, '../dist/styles/index.js'));
  await fs.rmdir(path.join(__dirname, '../dist/styles'));
}

console.log(process.env.NODE_ENV)
require('esbuild')
  .build({
    entryPoints: [
      path.join(__dirname, '../components/index.ts'),
      path.join(__dirname, '../components/styles/index.ts'),
    ],
    bundle: true,
    outdir: path.join(__dirname, '../dist'),
    format: 'cjs',
    minify: true,
    watch:
        process.env.NODE_ENV === 'development'
        ? {
            onRebuild(error, result) {
              if (error) console.error('watch build failed:', error);
              else console.log('watch build 成功:', result);
            },
          }
        : false,
    external: ['react', 'react-dom'],
    plugins: [
      postcssPlugin({
        plugins: [autoprefixer, postcssPresetEnv],
      }),
    ],
  })
  .then(() => {
    console.log('building...');
    handleAssets();
  })
  .catch(() => process.exit(1));
