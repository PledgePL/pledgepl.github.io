import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'

const Title = styled('h1')`
  background-color: red;
  font-size: 90px;
`

const SecondPage = () => (
  <>
    <Title>Partners</Title>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
