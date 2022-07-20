const path = require('path');

require('esbuild')
  .build({
    entryPoints: [path.join(__dirname,'../components/index.ts')],
    bundle: true,
    outfile: path.join(__dirname,'../dist/index.mjs'),
    format: 'esm',
    minify: true,
      watch: process.env.NODE_ENV !== 'production'?{
          onRebuild ( error, result ) {
              if (error) console .error( 'watch build failed:' , error)
              else  console .log( 'watch build 成功:' , result)
          },
      }:false,
    external: ['react', 'react-dom'],
  })
  .then(() => {
    console.log('build esm...');
  })
  .catch(() => process.exit(1));
