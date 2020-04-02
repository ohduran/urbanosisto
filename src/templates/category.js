import React from "react"

// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } en "${category}"`

  return (
    <div>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { tagLine } = node.frontmatter
          return (
            <li key={tagLine}>
              {tagLine}
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/catalog">Catálogo</Link>
    </div>
  )
}


export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tagLine
          }
        }
      }
    }
  }
`
