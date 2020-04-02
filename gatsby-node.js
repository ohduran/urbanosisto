const path = require("path")
const _ = require("lodash")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/categories.js")

  const result = await graphql(`
    {
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const categories = result.data.categoriesGroup.group
  // Make tag pages
  categories.forEach(category => {
    createPage({
      path: `/catalog/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}
