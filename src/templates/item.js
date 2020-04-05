import React from "react"
import DefaultLayout from '../layouts/Default'
import Categories from '../components/Categories'
import ItemCatalogo from '../components/ItemCatalogo'

// Components
import { graphql } from "gatsby"

export const query = graphql`
  query(
    $slug: String
  ){
    markdownRemark(
      fields: {
        slug:{
          eq: $slug
        }
      }
    ){
          fields{
            slug
          }
          frontmatter{
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
`

const Item = (props) => {

  return (

    <DefaultLayout>
      <div className="mt-4 grid" style={{
        gridTemplateColumns: "1fr 6fr",
        gridTemplateRows: "50px 1fr"
      }}>
      <header className="col-start-1 col-end-3 row-start-1">
        <h1 className="text-center capitalize font-bold font-family-montserrat-alternate text-4xl">{props.title}</h1>
      </header>
      <main className="mt-8 col-start-2 col-end-3 row-start-2 w-11/12 mx-auto">
        <ItemCatalogo src={props.data.markdownRemark.frontmatter.imageUrl.childImageSharp.fluid}
                      tagLine={props.data.markdownRemark.frontmatter.tagLine}
                      price={props.data.markdownRemark.frontmatter.price}
                      slug={props.data.markdownRemark.fields.slug}
                      imgClassName="h-100"/>
      </main>
      <aside className="mt-4 ml-4 col-start-1 row-start-2">
        <Categories />
      </aside>
      </div>
    </DefaultLayout>
  )
}

export default Item
