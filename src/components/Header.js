import React from "react";
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
      <header className="grid grid-cols-3 gap-4 bg-white px-4 py-3 align-center font-family-open-sans" style={{
        gridTemplateColumns: "200px 2fr 1fr",
        gridTemplateRows: "25px 2fr"
      }}>
        <h1 className="row-start-1 col-start-1 font-family-pacifico text-orange-500 text-xl">Urbano e Sisto</h1>
        <nav className={"row-start-2 px-2 pt-0 pb-4 md:row-start-1 md:col-start-2 md:flex md:justify-center md:align-end" + (this.state.active? ' block': ' hidden')}>
          <a href="#" className="block md:inline px-2 py-1 font-semibold rounded hover:bg-gray-200">Nuevo</a>
          <a href="#" className="block md:inline px-2 py-1 font-semibold rounded">Ropa</a>
          <a href="#" className="block md:inline px-2 py-1 font-semibold rounded">Accesorios</a>
        </nav>
        <nav className="col-start-3 flex pl-2 pt-2 align-baseline justify-end">
          <a href="#" className="block px-2 py-1"><IconSearch className="h-4 w-4" /></a>
          <a href="#" className="block px-2 py-1 text-sm">Español</a>
          <a href="#" className="block px-2 py-1"><IconUser className="h-4 w-4" /></a>
          <a href="#" className="block px-2 py-1"><IconCart className="h-4 w-4" /></a>
          <span className="block px-2 py-1 md:hidden" onClick={this.toggleClass} ><IconMenu className="h-4 w-4"/></span>
        </nav>
      </header>
    )
  }
}
