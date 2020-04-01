import React from "react";
import '../styles/index.css';

const Footer = ({ className }) => {

    return (
      <footer className={"bg-gray-800 pt-6 grid sticky bottom-0 left-0 w-full" + className}>
        <div className="mt-6 grid justify-center">
          <h2 class="font-family-montserrat-alternates text-center text-gray-400">Subscríbete y consigue un <span className="text-teal-500">10% de descuento </span><br />en artículos de Nueva Colección</h2>
          <input type="email" class="w-3/4 h-8 rounded-lg shadow-md focus:outline-none mx-auto mt-4 px-5 placeholder-gray-800 font-family-montserrat" placeholder="Introduce tu email"/>
        </div>
        <p className="mt-20 mb-2 text-sm text-center text-gray-400" style={{ fontFamily: 'Mansalva, cursive'}}>
          Designed by <a href="https://alvaroduran.com" className="text-teal-400">Álvaro Durán</a>
        </p>
      </footer>
    )
}

export default Footer
