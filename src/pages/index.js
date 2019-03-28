import React from 'react'
import { graphql } from 'gatsby'
import VideoBanner from '../components/video-banner'
import SectionPromises from '../components/sections/section-promises'
import SectionQuote from '../components/sections/section-quote'
import SectionFounders from '../components/sections/section-founders'

const IndexPage = ({ data }) => {
  const videoBannerBG = data.videoBannerBG
    ? data.videoBannerBG.childImageSharp.fluid
    : null
  const videoLoop = data.videoLoop ? data.videoLoop.publicURL : null
  const foundingPartners = data.foundingPartners
    ? data.foundingPartners.edges.map(_ => _.node)
    : null
  return (
    <>
      <VideoBanner
        title="Pledge Parental Leave is setting the standard for paid leave benefits in
        the U.S. creative industry"
        bg={videoBannerBG}
        loop={videoLoop}
      />
      <SectionPromises />
      <SectionQuote />
      {foundingPartners && <SectionFounders partners={foundingPartners} />}
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
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
    foundingPartners: allGoogleSheetPartnersRow(
      filter: { partnerCategory: { eq: "Founding" } }
    ) {
      edges {
        node {
          id
          active
          partnerName
          url
          policyUrl
          fluid {
            aspectRatio
            width
            height
            src
            srcSet
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`
