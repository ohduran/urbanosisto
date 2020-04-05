import React from "react";
import '../styles/index.css';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";

import {ProductConsumer} from "../context/ProductContext"

import IconUp from '../icons/Up'
import IconDown from '../icons/Down'

export default class extends React.Component {

    render(){
      return (
        <ProductConsumer>
          {(value) =>{
            return (
              <div key={this.props.item.frontmatter.tagLine} className="grid text-right my-2 grid-cols-5" style={{
                alignItems: 'end'
              }}>
                <Img className={`h-16 object-cover rounded-lg shadow-lg `} fluid={this.props.item.frontmatter.imageUrl.childImageSharp.fluid} alt={this.props.item.frontmatter.tagLine} />
                <figcaption className="mt-2 py-2 ml-1 sm:ml-5 font-family-montserrat text-gray-800 text-xs sm:text-sm text-center">{this.props.item.frontmatter.tagLine}</figcaption>
                <p className="hidden sm:block ml-1 my-auto text-sm font-bold text-center">{this.props.item.frontmatter.price}€</p>
                <p className="ml-1 col-start-3 sm:col-start-4 col-end-5 text-xs sm:text-sm font-bold flex justify-center">
                  <button className="ml-1 mt-1" onClick={() => {value.oneLess(this.props.item.fields.slug)}}>
                    <IconDown className="h-4 w-4"/>
                  </button>
                  <span className="text-center">{this.props.quantity}<br className="block sm:hidden"/><span className="hidden sm:block"> </span>artículo{this.props.quantity>1? 's':null}</span>
                  <button className="ml-1 mt-1" onClick={() => {value.oneMore(this.props.item.fields.slug)}}>
                    <IconUp className="h-4 w-4"/>
                  </button>
                </p>
                <p className="ml-1 text-xs sm:text-sm font-bold">
                  {(this.props.quantity * this.props.item.frontmatter.price).toFixed(2)}€
                </p>
              </div>
            )
          }}
      </ProductConsumer>
      )
    }
}
