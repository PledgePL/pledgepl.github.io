import React from 'react'
import { Link, graphql } from 'gatsby'
import Text from '../components/text'
import CTAButton from '../components/cta-button'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Text textSize='alpha' tagName='h1'>Alpha</Text>
      <Text textSize='beta' tagName='h2'>Beta</Text>
      <Text textSize='gamma' tagName='h3'>Gamma</Text>
      <Text textSize='theta' tagName='p'>paragraph</Text>
      <Text textSize='theta' tagName='section'>
        <p>This is a paragraph text</p>
        <p>Here is another paragraph</p>
      </Text>
      <CTAButton href='#'>We're ready to join</CTAButton>
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
