import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.css';

const Layout = (props) => {

  return (
    <div>

      <main className="min-h-screen relative z-10" style={{
          background: '#f7fafc'
        }}>
        <Header />
        {props.children}
      </main>
      <Footer className="z-0"/>
    </div>
  )
}
export default Layout
