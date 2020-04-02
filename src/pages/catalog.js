import React from "react"
import Layout from '../components/Layout'

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"

const Catalog = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/catalog/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Catalog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
