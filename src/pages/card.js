import React from "react";
import '../styles/index.css';
import woodwatch__Hr_uHRfImo_unsplash from '../images/woodwatch--Hr_uHRfImo-unsplash.jpg'
import Star from '../components/star';

const CardPage = () => {

  {/* overflow-hidden makes the image have rounded corners*/}

  return (
    <div className="bg-white border rounded-lg overflow-hidden m-32 antialiased text-gray-900">
      <img className="h-64 w-full object-cover object-center" src={woodwatch__Hr_uHRfImo_unsplash} alt="card" />
      <div className="p-6">
        {/* EYEBROW-TEXT
          Emphasise title by de-emphasising the next text.
          Try using an even smaller text, uppercase with bold text
          and a little letter separation (tracking-wide)  */}
        <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          Venice · Italy
        </div>
        {/* Move things down and reduce line-height (leading-tight) */}
        <h4 className="font-semibold text-lg leading-tight">Clothing made for a true contemporary woman</h4>
        <div className="mt-1">
          $39.99
          <span className="text-gray-600 text-sm"> / month</span>
        </div>
        <div className="mt-2 flex items-center">
          <Star className="text-teal-500"/>
          <Star className="text-teal-500"/>
          <Star className="text-teal-500"/>
          <Star className="text-teal-500"/>
          <Star className="text-gray-400"/>
          <span className="ml-2 text-gray-600 text-sm"> 45 reviews</span>
        </div>
      </div>

    </div>
  )
}

export default CardPage
