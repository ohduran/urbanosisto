import React from "react";
import { Link } from 'gatsby';
import '../styles/index.css';
import Pexels_Videos_2180924 from '../videos/Pexels_Videos_2180924.mp4'
import jess_harper_sunday_O1DhTK0_1iQ_unsplash from '../images/jess-harper-sunday-O1DhTK0_1iQ-unsplash.jpg'
import IconCart from '../icons/Cart';
import IconSearch from '../icons/Search';
import IconUser from '../icons/User';
import IconMenu from '../icons/Menu';


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
          <a href="#" className="block px-1 sm:px-4 py-1 text-sm">Español</a>
          <a href="#" className="block px-1 sm:px-4 py-1"><IconSearch className="h-4 w-4" /></a>
          <a href="#" className="block px-1 sm:px-4 py-1"><IconUser className="h-4 w-4" /></a>
          <a href="#" className="block px-1 sm:px-4 py-1"><IconCart className="h-4 w-4" /></a>
          <span className="block px-2 py-1 md:hidden" onClick={this.toggleClass} ><IconMenu className="h-4 w-4"/></span>
        </nav>
      </header>
    )
  }
}
