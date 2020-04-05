import React from "react";
import '../styles/index.css';
import {ProductConsumer} from "../context/ProductContext"
import DefaultLayout from '../layouts/Default';
import ImageCard from '../components/ImageCard';

export default class extends React.Component {

  render () {
    return(
    <DefaultLayout>
    <div className="mt-4 grid" style={{
      gridTemplateColumns: "1fr 6fr",
      gridTemplateRows: "50px 1fr"
    }}>
    <header className="col-start-1 col-end-3 row-start-1">
      <h1 className="text-center capitalize font-bold font-family-montserrat-alternate text-4xl">Cart</h1>
    </header>
    <main className="my-8 col-start-2 col-end-3 row-start-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
      <ProductConsumer>
      {(hello) =>{
        return <h1>{hello}</h1>
      }}
      </ProductConsumer>
    </main>
    <aside className="mt-4 ml-4 col-start-1 row-start-2">
      Aside
    </aside>
    </div>

    </DefaultLayout>
    )
  }
}
