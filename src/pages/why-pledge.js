import React from 'react'
import { Link } from 'gatsby'
import Banner from '../components/banner'

const SecondPage = () => (
  <>
    <Banner title="Why Pledge">
      The United States is the only industrialized country in the world with no
      government mandated parental leave, so it’s up to the private sector to
      inspire change from within. When you join The Pledge, you and your company
      are making history by standing up for future generations.
    </Banner>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
