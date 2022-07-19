import mdx from '@next/mdx';
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
export default withMDX({
  assetPrefix: 'https://oss-zzf.zzfzzf.com/design',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
