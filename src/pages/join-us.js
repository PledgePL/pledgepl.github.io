import React from 'react'
import { CoreBox } from '../components/core-box'
import styled from '@emotion/styled'

const Iframe = styled('iframe')`
  width: 100%;
  height: 100%;
  border: none;
`

const SecondPage = () => (
  <CoreBox bg="gamma" py={[6, 7]} px={[6, 7]} height="100vh">
    <Iframe width="600" height="338" src="https://docs.google.com/forms/d/e/1FAIpQLSfiXvVAKV7ToEXuapN3YDna8cZEiWqMumV9p_xPFh66vEAELQ/viewform?embedded=true">
      Loading...
    </Iframe>
  </CoreBox>
)

export default SecondPage
