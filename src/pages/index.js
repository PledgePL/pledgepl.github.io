import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <ul>
      {data.allGoogleSheetPartnersRow.edges.map(({node: {id, partnername}}) => {
        return <li key={id}>{partnername}</li>
      })}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allGoogleSheetPartnersRow {
      edges {
        node {
          id,
          active,
          partnername,
          partnercategory
        }
      }
    }
  }
`
