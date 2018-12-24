import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Banner from '../components/banner'

const Title = styled('h1')`
  background-color: red;
  font-size: 90px;
`

const SecondPage = () => (
  <>
    <Banner title="Companies who really care">
      Thanks to them, thousands of employees and their families have a bright
      and healthy future. Meet our partners who have helped make the Pledge
      Parental Leave movement a reality.
    </Banner>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
