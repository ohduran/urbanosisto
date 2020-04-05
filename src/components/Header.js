import React from "react";
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

import '../styles/index.css';
import {ProductConsumer} from "../context/ProductContext"
import SearchHits from '../components/SearchHits'
import IconCart from '../icons/Cart';
import IconUser from '../icons/User';
import IconMenu from '../icons/Menu';

const searchClient = algoliasearch('6NOA2X35JA', 'dcb1de01d431e5f1a041cd815879d3fb');

const displayHitsIfSearchBoxIsFilled = () =>{
  if (!document.getElementsByClassName('ais-SearchBox-input')[0].value.length){
    document.getElementsByClassName('ais-Hits')[0].style.display = 'none'
  }
  else{
    document.getElementsByClassName('ais-Hits')[0].style.display = 'block'
  }
}

const resetDisplayHits = () =>{
  document.getElementsByClassName('ais-Hits')[0].style.display = 'none'
}

export default class extends React.Component {

  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
        active: false,
    };
  }

  toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state);
  }

  render () {
    return (
      <header className="grid grid-cols-2 md:grid-cols-3 bg-white px-4 py-3 font-family-montserrat-alternates" style={{
        gridTemplateRows: "25px 2fr"
      }}>
        <Link to="/"><h1 className="row-start-1 col-start-1 font-family-montserrat-subrayada text-lg">Urbano Sisto</h1></Link>
        <nav className={"row-start-2 px-1 pt-2 md:pt-0 md:row-start-1 md:col-start-2 md:flex md:justify-center md:align-center" + (this.state.active? ' ': ' hidden')}>
          <Link to="catalog/novedades" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Novedades</Link>
          <Link to="catalog/prendas" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Prendas</Link>
          <Link to="catalog/accesorios" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Accesorios</Link>
        </nav>
        <nav className="col-start-2 md:col-start-3 flex pl-4 align-center justify-self-end justify-end">
          <Link to="/" className="hidden px-1 sm:px-4 py-1 text-sm">Español</Link>
          <InstantSearch searchClient={searchClient} indexName="Items">
            <SearchBox
              translations={{
                placeholder: 'Buscar'
              }}
              onChange={event => {
                displayHitsIfSearchBoxIsFilled()
              }}
              onReset={event => {
                resetDisplayHits()
              }}
              />
            <SearchHits className="ais-Hits"/>
          </InstantSearch>
          <Link to="/" className="hidden px-1 sm:px-4 py-1"><IconUser className="h-4 w-4" /></Link>

            <ProductConsumer>
              {(value) =>{
                if(value.cart.length > 0){
                  return (
                    <Link to="/cart" className="block px-3 sm:px-4 py-1 flex">
                      <IconCart className="text-green-500 h-4 w-4" />
                      <span className="text-sm text-green-500">{value.cart.length}</span>
                    </Link>
                  )
                }
                else{
                  return (
                    <span className="block px-3 sm:px-4 py-1 flex">
                      <IconCart className="h-4 w-4" />
                    </span>
                  )
                }

              }}
            </ProductConsumer>


          <span className="block pr-2 py-1 md:hidden"><IconMenu className="h-4 w-4" onClick={this.toggleClass}/></span>
        </nav>
      </header>
    )
  }
}
