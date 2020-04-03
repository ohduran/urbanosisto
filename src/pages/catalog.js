import React from "react"
import CatalogLayout from '../layouts/Catalog'

// Components
import { graphql, useStaticQuery } from "gatsby"

const Catalog = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {}
        },
        sort: {
          fields: [frontmatter___categories]
          order: ASC
        }){
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
  `)

    return (
      <CatalogLayout title="Catálogo" edges={data.allMarkdownRemark.edges} />
    )
}

export default Catalog
