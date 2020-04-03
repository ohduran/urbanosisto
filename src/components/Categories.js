import React from "react";
import '../styles/index.css';
import { Link, graphql, useStaticQuery } from 'gatsby';


const Catalog = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          edges {
            node {
              frontmatter {
                tag
              }
            }
          }
        }
      }
    }
  `)

  let [accesorios, novedades, prendas] = data.allMarkdownRemark.group

    return (

      <div>
        <Link to="/catalog">
          <h1 className="text-center text-lg font-bold font-family-montserrat-alternates rounded-lg hover:bg-orange-400">Catálogo</h1>
        </Link>

      {[novedades, prendas, accesorios].map((item) =>{

        let tags = [...new Set(item.edges.map(edge => edge.node.frontmatter.tag))]
        return(
          <div className="my-4">
            <Link to={`catalog/${item.fieldValue}`}>
              <h2 className="font-bold font-family-montserrat-alternates pl-1 rounded-lg hover:bg-orange-300 capitalize">
                {item.fieldValue}
              </h2>
            </Link>
            <ol className="ml-2">
              {tags.map(tag =>{
                if(item.fieldValue !== 'novedades'){
                  return (
                    <li key={tag}>
                      <Link to={`catalog/${tag}`}>
                        <h3 className="text-gray-600 capitalize pl-1 hover:bg-orange-200">{tag}</h3>
                      </Link>
                    </li>
                  )
                }
              })}
            </ol>

          </div>
        )
      })}
      </div>
    )
}

export default Catalog
