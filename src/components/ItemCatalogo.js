import React from "react";
import Img from "gatsby-image";
import '../styles/index.css';
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
      return (
        <div key={this.props.tagLine} className={`${this.props.className}`}>
          <Img className={`${this.props.imgClassName} object-cover rounded-lg shadow-lg `} fluid={this.props.src} alt={this.props.tagLine} />
          <figcaption className="mt-2 font-family-montserrat text-gray-800">{this.props.tagLine}</figcaption>
          <div className="flex justify-between">
            <p className="text-sm font-bold">{this.props.price} €</p>
            <div className="flex">
              <IconAdd className="h-4 w-4 mr-2" />
              <IconHeart className="h-4 w-4" liked={this.state.liked} />
            </div>
          </div>
        </div>
      )
    }
}
