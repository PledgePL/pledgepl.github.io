import React from 'react'
import Banner from '../components/banner'
import SectionPartnerList from '../components/sections/section-partner-list'

const PartnersPage = ({ data }) => {
  // TODO: check for min data requirements of each field
  const foundingPartners = data.foundingPartners
    ? data.foundingPartners.edges.map(_ => _.node)
    : null
  const partners = data.foundingPartners
    ? data.partners.edges.map(_ => _.node)
    : null
  return (
    <>
      <Banner title="Companies who really care">
        Thanks to them, thousands of employees and their families have a bright
        and healthy future. Meet our partners who have helped make the Pledge
        Parental Leave movement a reality.
      </Banner>
      <SectionPartnerList
        partners={foundingPartners}
        title="Founding Partners"
        description="These companies came together to start Pledge Parental Leave"
      />
      <SectionPartnerList
        partners={partners}
        title="Partners"
        description="Since our launch, these companies have joined our ranks."
      />
    </>
  )
}

export default PartnersPage

export const query = graphql`
  query {
    foundingPartners: allGoogleSheetPartnersRow(
      filter: { partnerCategory: { eq: "Founding" } }
      sort: { fields: [partnerName] }
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
    partners: allGoogleSheetPartnersRow(
      filter: { partnerCategory: { eq: "Partner" } }
      sort: { fields: [partnerName] }
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
