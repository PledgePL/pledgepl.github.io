import React from 'react'
import { Link } from 'gatsby'

import styled from 'react-emotion'

const Title = styled('h1')`
  background-color: red;
  font-size: 90px;
`

const SecondPage = () => (
  <>
    <Title>Hi from the second page</Title>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage