import React from "react";
import '../styles/index.css';

const Footer = ({ className }) => {

    return (
      <footer className={"bg-gray-300 pt-6 pb-16 grid sticky bottom-0 left-0 w-full" + className}>
        <div className="grid justify-center">
          <h2 class="font-family-pacifico text-center">Subscríbete y consigue un <span className="text-teal-500">10% de descuento </span><br />en artículos de Nueva Colección</h2>
          <input type="email" class="w-3/4 h-8 rounded-lg shadow-md focus:outline-none mx-auto mt-4 placeholder-gray-400 font-family-open-sans" placeholder="  Introduce tu email"/>
        </div>
      </footer>
    )
}

export default Footer
