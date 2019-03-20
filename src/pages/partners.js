import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Banner from '../components/banner'
import SectionPartnerList from '../components/sections/section-partner-list'


const PartnersPage = ({data}) => {
  const foundingPartners = data.foundingPartners ? data.foundingPartners.edges.map(_ => _.node) : null
  const partners = data.foundingPartners ? data.partners.edges.map(_ => _.node) : null
  return (
  <>
    <Banner title="Companies who really care">
      Thanks to them, thousands of employees and their families have a bright
      and healthy future. Meet our partners who have helped make the Pledge
      Parental Leave movement a reality.
    </Banner>
    <SectionPartnerList partners={foundingPartners} title="Founding Partners" />
    <SectionPartnerList partners={partners} title="Partners" />
  </>
)
  }

export default PartnersPage

export const query = graphql`
  query {
    foundingPartners: allGoogleSheetPartnersRow(filter: {partnerCategory: {eq: "Founding"}}) {
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
    partners: allGoogleSheetPartnersRow(filter: {partnerCategory: {eq: "Partner"}}) {
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
