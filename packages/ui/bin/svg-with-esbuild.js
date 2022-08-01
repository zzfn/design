const path = require('path');
const fs = require('fs/promises');
const svgr = require('@svgr/core');
module.exports = (options = {}) => ({
  name: 'svg-plugin',
  setup:function(build) {
    build.onResolve({ filter: /.\.(svg)$/ }, (args) => {
      console.log(111)
      return {
        path: path.join(args.resolveDir, args.path),
        namespace: 'svgr',
      };
    });

    build.onLoad({ filter: /.*/ ,namespace: 'svgr'}, async (args) => {
      const svg = await fs.readFile(args.path, 'utf8');
      const contents = await svgr.transform(svg, { ...options }, { filePath: args.path });
      return {
        contents:'2222213',
        loader: 'tsx',
      };
    });
  },
});
