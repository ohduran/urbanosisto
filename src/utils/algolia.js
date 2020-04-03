const itemQuery = `{
  items: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/items/" } }
  ) {
    edges {
      node {
        frontmatter {
          price
          tagLine
          categories
          tag
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: itemQuery,
    transformer: ({ data }) => flatten(data.items.edges),
    indexName: `Items`,
    settings,
  },
]

module.exports = queries