const path = require('path');

console.log(process.env.NODE_ENV)
require('esbuild')
  .build({
    entryPoints: [path.join(__dirname, '../components/index.ts')],
    bundle: true,
    outfile: path.join(__dirname, '../dist/index.cjs'),
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
  })
  .then(() => {
    console.log('build esm...');
  })
  .catch(() => process.exit(1));
