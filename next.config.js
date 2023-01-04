
// Adding Latex support src: https://github.com/shuding/nextra/issues/416
// For the Katex Styling don't follow the _document.js suggestion in above link but follow this: https://nickymeuleman.netlify.app/blog/math-gatsby-mdx
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // ...
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = withNextra()