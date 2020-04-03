import React from "react";
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

import '../styles/index.css';
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
        <Link to="/"><h1 className="row-start-1 col-start-1 font-family-montserrat-subrayada text-lg">Urbano e Sisto</h1></Link>
        <nav className={"row-start-2 px-1 pt-2 md:pt-0 md:row-start-1 md:col-start-2 md:flex md:justify-center md:align-center" + (this.state.active? ' ': ' hidden')}>
          <Link to="catalog/novedades" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Novedades</Link>
          <Link to="catalog/prendas" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Prendas</Link>
          <Link to="catalog/accesorios" className="block md:inline px-2 font-semibold rounded hover:bg-gray-200">Accesorios</Link>
        </nav>
        <nav className="col-start-2 md:col-start-3 flex pl-4 align-center justify-self-end justify-end">
          <a href="#" className="hidden px-1 sm:px-4 py-1 text-sm">Español</a>
          <div className="block px-1 sm:px-4" >
            <InstantSearch searchClient={searchClient} indexName="Items">
              <SearchBox
                translations={{
                  placeholder: 'Buscar'
                }}
                onChange={event => {
                  displayHitsIfSearchBoxIsFilled()
                }}
                />
              <SearchHits className="ais-Hits"/>
            </InstantSearch>

          </div>
          <a href="#" className="hidden px-1 sm:px-4 py-1"><IconUser className="h-4 w-4" /></a>
          <a href="#" className="block px-1 sm:px-4 py-1"><IconCart className="h-4 w-4" /></a>
          <span className="block px-2 py-1 md:hidden" onClick={this.toggleClass} ><IconMenu className="h-4 w-4"/></span>
        </nav>
      </header>
    )
  }
}
