import React from "react";
import '../styles/index.css';
import ImageCard from './ImageCard';

const ItemUrbanoSister = ({ className, src, handle, href }) => {

    return (
      <div className={`${className}`}>
        <a href={href}><ImageCard src={src} alt={handle}  /></a>
        <div className="flex mt-2 justify-between text-xs">
          <figcaption className="font-bold font-family-montserrat-alternates">{`@${handle}`}</figcaption>
          <p className="font-bold font-family-montserrat-alternates"><a href={href} className="underline">Compra el conjunto</a></p>
        </div>
      </div>
    )
}

export default ItemUrbanoSister
