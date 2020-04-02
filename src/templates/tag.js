import React from "react"
import CatalogLayout from '../layouts/Catalog'

// Components
import { graphql } from "gatsby"

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <CatalogLayout title={tag} edges={edges} />
  )
}

export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tag: { in: [$tag] }, categories: { ne: "novedades"} } },
      sort: {
        fields: [frontmatter___tag]
        order: ASC
      }
    ) {
      edges {
        node {
          frontmatter {
            price
            tagLine
            categories
            tag
            imageUrl{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
