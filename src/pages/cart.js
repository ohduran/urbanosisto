import React from "react";
import { Link } from 'gatsby';
import '../styles/index.css';
import {ProductConsumer} from "../context/ProductContext"
import DefaultLayout from '../layouts/Default';
import ItemCart from '../components/ItemCart';

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
      <ProductConsumer>
        {(value) =>{
          if(value.cart.length > 0){
          let slugs = value.cart.map(item => item.slug)
          return (
            <DefaultLayout>
              <main className="w-11/12 md:w-2/3 mx-auto my-2 md:my-16">
                {
                  data.allMarkdownRemark.edges
                    .filter(item => slugs.indexOf(item.node.fields.slug) >= 0)
                    .map(
                    (item) =>{
                      const quantity = value.cart[slugs.indexOf(item.node.fields.slug)].quantity
                      return(
                        <ItemCart key={item.node.fields.slug} item={item.node} quantity={quantity} />
                      )
                    }
                  )
                }
                <p className="mt-5 font-bold text-right text-lg">Total: {value.total}€</p>
                <Link to="/checkout" className="flex justify-end">
                  <button className="my-5 p-2 font-bold font-family-montserrat-alternates text-lg rounded-lg bg-orange-300 hover:bg-orange-500">Comenzar Pedido</button>
                </Link>
              </main>
            </DefaultLayout>
          )}
          else{
            return(
              <DefaultLayout>
                <p className="mt-5 font-bold text-center text-lg">La cesta está vacía</p>
              </DefaultLayout>
            )

          }
        }}
      </ProductConsumer>
    )
}

export default Catalog
