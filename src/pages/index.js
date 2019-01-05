import React from 'react'
import { Link, graphql } from 'gatsby'
import Text from '../components/text'
import ButtonCTA from '../components/button-cta'
import Banner from '../components/banner'
import SectionEmployeeCount from '../components/sections/section-employee-count'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Text textSize="alpha" tagName="h1">
        Alpha
      </Text>
      <Text textSize="beta" tagName="h2">
        Beta
      </Text>
      <Text textSize="gamma" tagName="h3">
        Gamma
      </Text>
      <Text textSize="theta" tagName="p">
        paragraph
      </Text>
      <Text textSize="theta" tagName="section">
        <p>This is a paragraph text</p>
        <p>Here is another paragraph</p>
      </Text>
      <ButtonCTA href="#">We're ready to join</ButtonCTA>
      <Banner title="Companies who really care">
        Thanks to them, thousands of employees and their families have a bright
        and healthy future. Meet our partners who have helped make the Pledge
        Parental Leave movement a reality.
      </Banner>
      <SectionEmployeeCount />
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
