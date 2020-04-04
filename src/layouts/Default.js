import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/index.css';

export default class extends React.Component {

    render () {
      return (
        <div>
          <main className="min-h-screen relative z-10" style={{
              background: '#fffaf0'
            }}>
            <Header />
            {this.props.children}
          </main>
          <Footer className="z-0"/>
        </div>
      )
    }

}
