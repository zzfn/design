import mdx from '@next/mdx';
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
export default withMDX({
  assetPrefix: process.env.assetPrefix,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
