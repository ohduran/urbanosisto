const path = require("path")
const _ = require("lodash")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const categoryTemplate = path.resolve("src/templates/category.js")
  const tagTemplate = path.resolve("src/templates/tag.js")

  const resultCategories = await graphql(`
    {
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  const resultTags = await graphql(`
    {
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tag) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (resultCategories.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (resultTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract category data from query
  const categories = resultCategories.data.categoriesGroup.group
  // Make category pages
  categories.forEach(category => {
    createPage({
      path: `/catalog/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })

  // Extract tag data from query
  const tags = resultTags.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/catalog/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })


}
