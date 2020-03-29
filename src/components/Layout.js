import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.css';

const Layout = (props) => {

  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout
