import React from "react";
import '../styles/index.css';
import Layout from '../components/Layout';
import ItemColeccion from '../components/ItemColeccion';
import taisiia_stupak_8V61ORZxH1w_unsplash from '../images/taisiia-stupak-8V61ORZxH1w-unsplash.jpg'

export default class extends React.Component {

  render () {

    const data = [
      {
        'src': taisiia_stupak_8V61ORZxH1w_unsplash,
        'price': '19,99',
        'tagLine': 'Camisa',
        'href': '#'
      },
    ]

    return (
      <Layout>

        <h1>Hello, world</h1>

        {data.map((item) =>{
            return (
              <ItemColeccion className="" src={item.src} price={item.price} tagLine={item.tagLine} href={item.href} />
            )
          })}

    </Layout>
    )
  }
}
