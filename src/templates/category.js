import React from "react"
import DefaultLayout from '../layouts/Default'
import ItemCatalogo from '../components/ItemCatalogo'

// Components
import { Link, graphql } from "gatsby"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } en "${category}"`

  return (
    <DefaultLayout>
      <div className="mt-4 grid" style={{
        gridTemplateColumns: "1fr 6fr",
        gridTemplateRows: "50px 1fr"
      }}>
      <header className="col-start-1 col-end-3 row-start-1">
        <h1 className="text-center capitalize font-bold font-family-montserrat-alternate text-4xl">
          {category}
        </h1>
      </header>
      <main className="mt-4 col-start-2 col-end-3 row-start-2 grid grid-cols-4 grid-rows-5 gap-4 w-11/12 mx-auto">
        {edges.map((item) =>{
            return (
              <ItemCatalogo src={item.node.frontmatter.imageUrl.childImageSharp.fluid}
                            tagLine={item.node.frontmatter.tagLine}
                            price={item.node.frontmatter.price} />
            )
          })}
          <Link to="/catalog">Catálogo</Link>
      </main>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}

    </div>
    </DefaultLayout>
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
      totalCount
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
