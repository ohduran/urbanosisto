import React from "react";
import '../styles/index.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import ItemCatalogo from '../components/ItemCatalogo';


const Catalog = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              categories
              tag
            }
          }
        }
      }
    }
`)

    return (
      [...new Set(data.allMarkdownRemark.edges.map(item => item.node.frontmatter.categories))].map((categories) =>{
        return(
          <React.Fragment>
            <h1 className="capitalize">{categories}</h1>
            <ol className="ml-2">
              {[...new Set(data.allMarkdownRemark.edges.map(item =>{
                if(item.node.frontmatter.categories === categories){
                  return item.node.frontmatter.tag
                }
              }))].map((tag) =>{
                return(
                  <li className="capitalize">{tag}</li>
                )
              })}
            </ol>
          </React.Fragment>
        )
      })
    )
}

export default Catalog
