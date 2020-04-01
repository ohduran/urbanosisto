import React from "react";
import Img from "gatsby-image";
import '../styles/index.css';
import IconHeart from '../icons/Heart';

const ItemColeccion = ({ className, src, tagLine, price, href }) => {

    return (
      <div className={`${className}`}>
        <a href={href}><img className={`h-full object-cover rounded-lg shadow-lg`} src={src} alt={tagLine} /></a>
        <figcaption className="mt-2 font-family-montserrat text-gray-800">{tagLine}</figcaption>
        <div class="flex justify-between">
          <p className="text-sm font-bold">{price} €</p>
          <IconHeart className="h-4 w-4" />
        </div>
      </div>
    )
}

export default ItemColeccion
