import React from "react";
import '../styles/index.css';

const ImageCard = ({ className, src, alt }) => {

    return (
      <img className={`h-64 md:h-full w-full object-cover rounded-lg shadow-lg ${className}`} src={src} alt={alt} />
    )
}

export default ImageCard
