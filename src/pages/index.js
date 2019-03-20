import React from 'react'
import { Link, graphql } from 'gatsby'
import Text from '../components/text'
import ButtonCTA from '../components/button-cta'
import Banner from '../components/banner'
import VideoBanner from '../components/video-banner'

const IndexPage = ({ data }) => {
  const videoBannerBG = data.videoBannerBG
    ? data.videoBannerBG.childImageSharp.fluid
    : null
  const videoLoop = data.videoLoop ? data.videoLoop.publicURL : null
  return (
    <>
      <VideoBanner
        title="Pledge Parental Leave is setting the standard for paid leave benefits in
        the U.S. creative industry"
        bg={videoBannerBG}
        loop={videoLoop}
      />
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
    videoBannerBG: file(name: { eq: "video-banner-bg" }) {
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    videoLoop: file(name: { eq: "video-loop" }) {
      id
      publicURL
    }
  }
`
