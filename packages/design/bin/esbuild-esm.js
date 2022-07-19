const path = require('path');

require('esbuild')
  .build({
    entryPoints: [path.join(__dirname,'../components/index.ts')],
    bundle: true,
    outfile: path.join(__dirname,'../dist/index.mjs'),
    format: 'esm',
    minify: true,
    external: ['react', 'react-dom'],
  })
  .then(() => {
    console.log('build esm...');
  })
  .catch(() => process.exit(1));
