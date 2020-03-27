import React from "react";
import '../styles/index.css';
import clarisse_meyer_d6pLNFVZt_4_unsplash from '../images/clarisse-meyer-d6pLNFVZt_4-unsplash.jpg'
import dmitriy_ilkevich_wWU26LgfTfU_unsplash from '../images/dmitriy-ilkevich-wWU26LgfTfU-unsplash.jpg'

const IndexPage = () => {

  return (
    <div className="flex bg-gray-100">
      <div className="bg-gray-100 px-8 py-12 mx-auto max-w-md sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div className="xl:max-w-lg xl:ml-auto">
          <img className="h-16" src={clarisse_meyer_d6pLNFVZt_4_unsplash} alt="clarisse meyer" />
          <img className="mt-6 sm:mt-8 rounded-lg shadow-xl h-64 w-full object-cover object-top lg:hidden" src={dmitriy_ilkevich_wWU26LgfTfU_unsplash} alt="dmitriy ilkevich" />
          <h1 className="font-bold text-grey-900 leading-tight mt-6 sm:mt-8 sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl">
            Las calles son tuyas.
            <br className="hidden xl:inline" /><span className="text-indigo-500"> Muévete.</span>
          </h1>
          <p className="mt-2 sm:mt-4 text-grey-600 sm:text-xl">Confía en ti misma. Habla por ti misma. Sé tú misma.</p>
          <div className="mt-4 sm:mt-6">
            <a href="#" className="inline-block bg-indigo-500 text-sm sm:text-base text-white px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider font-semibold">Suscríbete</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img className="absolute inset-0 h-full w-full object-cover object-top"
            src={dmitriy_ilkevich_wWU26LgfTfU_unsplash} alt="dmitriy ilkevich" />
      </div>
    </div>
  )
}

export default IndexPage
