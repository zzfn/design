const postcss = require('postcss');
const path = require('path');
module.exports = (options = { plugins: [] }) => ({
  name: 'postcss-with-esbuild',
  setup: function (build) {
    build.onResolve({ filter: /.\.(scss)$/ }, (args) => {
      return {
        path: path.join(args.resolveDir, args.path),
        namespace: 'postcss',
      };
    });
    build.onLoad({ filter: /.*/, namespace: 'postcss' }, async (args) => {
      const fileContent = await require('sass').compileAsync(args.path);
      const result = await postcss(options.plugins).process(fileContent.css, {
        from: args.path
      });
      return {
        contents: result.css,
        loader: 'css',
      };
    });
  },
});
