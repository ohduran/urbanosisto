import React from "react";
import '../styles/index.css';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";

import {ProductConsumer} from "../context/ProductContext"

import IconAdd from '../icons/Add'
import IconMinus from '../icons/Minus'

export default class extends React.Component {

    render(){
      return (
        <ProductConsumer>
          {(value) =>{
            return (
              <div key={this.props.item.frontmatter.tagLine} className="grid text-right my-2" style={{
                gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr",
                alignItems: 'end'
              }}>
                <Img className={`h-16 object-cover rounded-lg shadow-lg `} fluid={this.props.item.frontmatter.imageUrl.childImageSharp.fluid} alt={this.props.item.frontmatter.tagLine} />
                <figcaption className="mt-2 ml-5 font-family-montserrat text-gray-800">{this.props.item.frontmatter.tagLine}</figcaption>
                <p className="ml-1 text-sm font-bold">{this.props.item.frontmatter.price}€</p>
                <p className="ml-1 text-sm font-bold flex justify-center">
                  <button className="ml-1 mt-1" onClick={() => {value.oneLess(this.props.item.fields.slug)}}>
                    <IconMinus className="h-4 w-4"/>
                  </button>
                  <span>{this.props.quantity} artículo{this.props.quantity>1? 's':null}</span>
                  <button className="ml-1 mt-1" onClick={() => {value.oneMore(this.props.item.fields.slug)}}>
                    <IconAdd className="h-4 w-4"/>
                  </button>
                </p>
                <p className="ml-1 text-sm font-bold">
                  {(this.props.quantity * this.props.item.frontmatter.price).toFixed(2)}€
                </p>
              </div>
            )
          }}
      </ProductConsumer>
      )
    }
}
