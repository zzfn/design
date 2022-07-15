require('esbuild')
  .build({
    entryPoints: ['components/index.ts'],
    bundle: true,
    outfile: 'dist/index.mjs',
    format: 'esm',
    minify: true,
    external: ['react', 'react-dom', 'classnames'],
  })
  .then(() => {
    console.log('build esm...');
  })
  .catch(() => process.exit(1));
