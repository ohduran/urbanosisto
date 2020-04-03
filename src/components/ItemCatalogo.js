import React from "react";
import Img from "gatsby-image";
import '../styles/index.css';
import IconHeart from '../icons/Heart';

const ItemCatalogo = ({ imgClassName, className, src, tagLine, price, href }) => {
    return (
      <div key={tagLine} className={`${className}`}>
        <Img className={`${imgClassName} object-cover rounded-lg shadow-lg `} fluid={src} alt={tagLine} />
        <figcaption className="mt-2 font-family-montserrat text-gray-800">{tagLine}</figcaption>
        <div className="flex justify-between">
          <p className="text-sm font-bold">{price} €</p>
          <IconHeart className="h-4 w-4" />
        </div>
      </div>
    )
}

export default ItemCatalogo
