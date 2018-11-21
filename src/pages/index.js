import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        {data.allGoogleSheetPartnersRow.edges.map(
          ({
            node: {
              id,
              partnerName,
              logoUrl: { cloudinaryUrl },
            },
          }) => {
            let imageSrc = cloudinaryUrl
            return (
              <li key={id}>
                <h3>{partnerName}</h3>
                {imageSrc && <img alt={partnerName} src={imageSrc} />}
              </li>
            )
          }
        )}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allGoogleSheetPartnersRow {
      edges {
        node {
          id
          active
          partnerName
          logoUrl {
            cloudinaryUrl
          }
        }
      }
    }
  }
`
