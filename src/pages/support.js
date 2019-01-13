import React from 'react'
import { Link } from 'gatsby'
import Banner from '../components/banner'
import SectionResourceToolBox from '../components/sections/section-resource-tool-box'

const SecondPage = () => (
  <>
    <Banner title="We are here to help">
      Whether you’re starting from scratch, need help with legalities, or simply
      have a question or two, the Pledge Parental Leave team is here to help.
      Explore our resources below, and if you have any additional questions, let
      us know at <a href="mailto:team@pledgepl.org">team@pledgepl.org</a>
    </Banner>
    <SectionResourceToolBox />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
