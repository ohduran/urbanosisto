import React from "react"
import CatalogLayout from '../layouts/Catalog'

// Components
import { graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <CatalogLayout title={category} edges={edges} />
  )
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { categories: { in: [$category] } } },
      sort: {
        fields: [frontmatter___categories]
        order: ASC
      }
    ) {
      edges {
        node {
          fields{
            slug
          }
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
