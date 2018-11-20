import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import styled from 'react-emotion'

const Title = styled('h1')`
  background-color: red;
  font-size: 90px;
`

const SecondPage = () => (
  <Layout>
    <Title>Hi from the second page</Title>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
