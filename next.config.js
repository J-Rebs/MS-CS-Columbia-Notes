
// Adding Latex support src: https://github.com/shuding/nextra/issues/416
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})
module.exports = withNextra()
