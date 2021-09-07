import React from 'react'
import { graphql } from 'gatsby'
import Banner from '../components/banner'
import SectionPartnerList from '../components/sections/section-partner-list'

const PartnersPage = ({ data }) => {
  // TODO: check for min data requirements of each field
  const foundingPartners = data.foundingPartners
    ? data.foundingPartners.edges.map(_ => _.node)
    : null
  const partners = data.partners ? data.partners.edges.map(_ => _.node) : null
  const supportingPartners = data.supportingPartners
    ? data.supportingPartners.edges.map(_ => _.node)
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
      <SectionPartnerList
        partners={supportingPartners}
        title="Supporting Partners"
        description="Helping us every step of the way."
      />
    </>
  )
}

export default PartnersPage

export const query = graphql`
  query {
    foundingPartners: allGoogleSpreadsheetPartners(filter: {partnerCategory: {eq: "Founding"}, active: {eq: "TRUE"}}, sort: {fields: [partnerName]}) {
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
    partners: allGoogleSpreadsheetPartners(
      filter: { partnerCategory: { eq: "Partner" }, active: {eq: "TRUE"} }
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
    supportingPartners: allGoogleSpreadsheetPartners(
      filter: { partnerCategory: { eq: "Supporting" }, active: {eq: "TRUE"} }
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
