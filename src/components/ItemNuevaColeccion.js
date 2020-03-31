import React from "react";
import '../styles/index.css';
import ImageCard from './ImageCard';
import IconHeart from '../icons/Heart';

const ItemUrbanoSister = ({ className, src, tagLine, price, href }) => {

    return (
      <div className={`${className}`}>
        <a href={href}><img className={`h-auto object-cover rounded-lg shadow-lg`} src={src} alt={tagLine} /></a>
        <figcaption className="mt-2 font-family-montserrat text-xs">{tagLine}</figcaption>
        <div class="flex justify-between">
          <p>{price} €</p>
          <IconHeart className="h-6 w-6" />
        </div>
      </div>
    )
}

export default ItemUrbanoSister
