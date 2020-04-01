import React from "react";
import '../styles/index.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import ItemCatalogo from '../components/ItemCatalogo';
import Categories from '../components/Categories';


const Catalog = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {}
        },
        sort: {
          fields: [frontmatter___tagLine]
          order: ASC
        }){
          edges {
            node {
              frontmatter {
                price
                tagLine
                category
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
      <Layout>
        <div className="mt-4 grid" style={{
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "50px 1fr"
        }}>
          <header className="col-start-1 col-end-3 row-start-1">
            <h1 className="text-center font-bold font-family-montserrat-alternate text-lg">Novedades</h1>
          </header>
          <main className="mt-4 col-start-2 row-start-2 grid grid-cols-4 grid-rows-5 gap-4 w-11/12 mx-auto">
            {data.allMarkdownRemark.edges.map((item) =>{
                return (
                  <ItemCatalogo src={item.node.frontmatter.imageUrl.childImageSharp.fluid}
                                tagLine={item.node.frontmatter.tagLine}
                                price={item.node.frontmatter.price} />
                )
              })}
          </main>
          <aside className="mx-4 mt-4 col-start-1 row-start-2">
            <Categories />
          </aside>
        </div>
    </Layout>
    )
}

export default Catalog
