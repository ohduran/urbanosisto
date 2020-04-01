import React from "react";
import '../styles/index.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"
import Layout from '../components/Layout';
import IconHeart from '../icons/Heart';
import alex_iby_Pd585pphU_4_unsplash from '../images/alex-iby-Pd585pphU-4-unsplash.jpg'


const New = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
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
                  <div>
                    <a href="#"><Img fluid={item.node.frontmatter.imageUrl.childImageSharp.fluid} alt={item.node.frontmatter.tagLine} /></a>
                    <figcaption className="mt-2 font-family-montserrat text-gray-800">{item.node.frontmatter.tagLine}</figcaption>
                    <div class="flex justify-between">
                      <p className="text-sm font-bold">{item.node.frontmatter.price} €</p>
                      <IconHeart className="h-4 w-4" />
                    </div>
                  </div>
                )
              })}
          </main>
          <aside className="mx-4 mt-4 col-start-1 row-start-2">
            {/* Obtains a unique set of categories out of the available options */}
            {[...new Set(data.allMarkdownRemark.edges.map(item => item.node.frontmatter.category))].map((category) =>{
              return(
                <React.Fragment>
                  <h1 className="capitalize">{category}</h1>
                  <ol className="ml-2">
                    {/* Obtains a unique set of tags out of the selected category */}
                    {[...new Set(data.allMarkdownRemark.edges.map(item =>{
                      if(item.node.frontmatter.category === category){
                        return item.node.frontmatter.tag
                      }
                    }))].map((tag) =>{
                      return(
                        <li className="capitalize">{tag}</li>
                      )
                    })

                  }
                  </ol>
                </React.Fragment>
              )
            })
            }
          </aside>
        </div>
    </Layout>
    )
}

export default New
