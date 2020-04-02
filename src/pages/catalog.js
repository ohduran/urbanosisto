import React from "react"
import DefaultLayout from '../layouts/Default'
import ItemCatalogo from '../components/ItemCatalogo'

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql, useStaticQuery } from "gatsby"

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
      <DefaultLayout>
        <div className="mt-4 grid" style={{
          gridTemplateColumns: "1fr 6fr",
          gridTemplateRows: "50px 1fr"
        }}>
          <header className="col-start-1 col-end-3 row-start-1">
            <h1 className="text-center font-bold font-family-montserrat-alternate text-4xl">Catálogo</h1>
          </header>
          <main className="mt-4 col-start-2 col-end-3 row-start-2 grid grid-cols-4 grid-rows-5 gap-4 w-11/12 mx-auto">
            {data.allMarkdownRemark.edges.map((item) =>{
                return (
                  <ItemCatalogo src={item.node.frontmatter.imageUrl.childImageSharp.fluid}
                                tagLine={item.node.frontmatter.tagLine}
                                price={item.node.frontmatter.price} />
                )
              })}
          </main>
        </div>
    </DefaultLayout>
    )
}

export default Catalog
