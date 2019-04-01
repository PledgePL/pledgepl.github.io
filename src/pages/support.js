import React from 'react'
import css from '@styled-system/css'
import { CoreBox } from '../components/core-box'
import Banner from '../components/banner'
import SectionResourceToolBox from '../components/sections/section-resource-tool-box'
import SectionFAQ from '../components/sections/section-faq'

const CustomizedLink = ({ ...props }) => {
  return (
    <CoreBox
      as="a"
      color="beta"
      css={css({ '&:hover': { color: 'beta' } })}
      {...props}
    >
      team@pledgepl.org
    </CoreBox>
  )
}

const SupportPage = () => (
  <>
    <Banner title="We are here to help">
      Whether you’re starting from scratch, need help with legalities, or simply
      have a question or two, the Pledge Parental Leave team is here to help.
      Explore our resources below, and if you have any additional questions, let
      us know at{' '}
      <CustomizedLink href="mailto:team@pledgepl.org">
        team@pledgepl.org
      </CustomizedLink>
    </Banner>
    <SectionResourceToolBox />
    <SectionFAQ />
  </>
)

export default SupportPage
