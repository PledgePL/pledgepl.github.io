import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { Box, Flex } from '@rebass/grid'
import Logo from './logo'
import ButtonCTA from './button-cta'
import ButtonMenu from './button-menu'

const Header = styled(Flex)`
  background-color: ${props => props.theme.bgColor2};
  width: 100%;
  box-shadow: 0 0 20px rgba(75, 0, 255, 0.44);
`

export default withTheme(props => (
  <Header as="header" alignItems="center" justifyContent="center">
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1200"
      width="100%"
      p={3}
      css={{
        maxWidth: '1200px'
      }}
    >
      <Logo />
      <div>
        <ButtonMenu href="#">Why Pledge</ButtonMenu>
        <ButtonMenu href="#">Our Partners</ButtonMenu>
        <ButtonMenu href="#">Support</ButtonMenu>
      </div>
      <div>
        <ButtonCTA href="#" size="small">
          Join us today
        </ButtonCTA>
      </div>
    </Flex>
  </Header>
))
