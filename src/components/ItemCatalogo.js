import React from "react";
import { Link } from 'gatsby';
import Img from "gatsby-image";
import '../styles/index.css';
import {ProductConsumer} from "../context/ProductContext"
import IconHeart from '../icons/Heart';
import IconAdd from '../icons/Add';

export default class extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        'liked': false,
      }
    }

    render(){
      let product = {
        slug: this.props.slug,
        price: this.props.price
      }
      return (
        <ProductConsumer>
          {(value) =>{
            return(
              <div key={this.props.tagLine} className={`${this.props.className}`}>
                <Link to={`items/${this.props.slug}`}>
                  <Img className={`${this.props.imgClassName} object-cover rounded-lg shadow-lg `} fluid={this.props.src} alt={this.props.tagLine} />
                </Link>
                <figcaption className="mt-2 font-family-montserrat text-gray-800">{this.props.tagLine}</figcaption>
                <div className="flex justify-between">
                  <p className="text-sm font-bold">{this.props.price} €</p>
                    <div className="flex">
                      <button className="mr-2 flex align-text-top mt-0" onClick={() => {value.addToCart(product)}}>
                        <IconAdd className="h-4 w-4"/>
                      </button>
                      <IconHeart className="h-4 w-4" liked={this.state.liked} />
                    </div>
                </div>
              </div>
            )
          }}
        </ProductConsumer>
      )
    }
}
