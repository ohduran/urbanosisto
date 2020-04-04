import React from 'react';
import { Link } from 'gatsby';
import DefaultLayout from './Default'
import ItemCatalogo from '../components/ItemCatalogo'
import Categories from '../components/Categories'
import '../styles/index.css';

const CatalogLayout = (props) => {

  return (
    <DefaultLayout>
      <div className="mt-4 grid" style={{
        gridTemplateColumns: "1fr 6fr",
        gridTemplateRows: "50px 1fr"
      }}>
      <header className="col-start-1 col-end-3 row-start-1">
        <h1 className="text-center capitalize font-bold font-family-montserrat-alternate text-4xl">{props.title}</h1>
      </header>
      <main className="my-8 col-start-2 col-end-3 row-start-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        {props.edges.map((item) =>{
          return (
            <Link to={`items/${item.node.fields.slug}`}>
              <ItemCatalogo src={item.node.frontmatter.imageUrl.childImageSharp.fluid}
                            tagLine={item.node.frontmatter.tagLine}
                            price={item.node.frontmatter.price}
                            slug={item.node.fields.slug}
                            imgClassName="h-64" />
            </Link>
          )
        })}
      </main>
      <aside className="mt-4 ml-4 col-start-1 row-start-2">
        <Categories />
      </aside>
      </div>
    </DefaultLayout>
  )
}
export default CatalogLayout
