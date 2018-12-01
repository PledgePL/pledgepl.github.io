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

const Nav = styled(Flex)({
  flexWrap: 'nowrap',
})

const NavItem = props => <Box pl={4} pr={4} {...props} />

export default withTheme(props => (
  <Header as="header" alignItems="center" justifyContent="center">
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1200"
      width="100%"
      p={3}
      css={{
        maxWidth: '1200px',
      }}
    >
      <Logo flex="0 0 auto" />
      <Nav as="nav">
        <NavItem>
          <ButtonMenu href="#">Why Pledge</ButtonMenu>
        </NavItem>
        <NavItem>
          <ButtonMenu href="#">Our Partners</ButtonMenu>
        </NavItem>
        <NavItem>
          <ButtonMenu href="#">Support</ButtonMenu>
        </NavItem>
      </Nav>
      <ButtonCTA href="#" size="small">
        Join us today
      </ButtonCTA>
    </Flex>
  </Header>
))
