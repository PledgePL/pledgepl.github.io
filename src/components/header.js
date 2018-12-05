import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/grid'
import { style } from 'styled-system'
import Logo from './logo'
import ButtonCTA from './button-cta'
import ButtonMenu from './button-menu'
import ButtonHamburger from './button-hamburger'

const height = style({
  // React prop name
  prop: 'height',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'height',
  // key for theme values
  key: 'height',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [ 'auto' ]
})

const Header = styled(Flex)`
  background-color: ${props => props.theme.bgColor2};
  width: 100%;
  box-shadow: 0 0 20px rgba(75, 0, 255, 0.44);
  ${height}
`
const Nav = styled(Flex)({
  flexWrap: 'nowrap',
})

const NavItem = props => <Box pl={4} pr={4} {...props} />

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.onHamburgerClick = this.onHamburgerClick.bind(this)
    this.state = {
      active: false
    }
  }

  onHamburgerClick() {
    console.log("hamburger click")
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <Header as="header" alignItems="flex-start" justifyContent="center" height={["100vh", "auto"]}>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          maxWidth="1200"
          width="100%"
          p={3}
          css={{
            height: "100%",
            maxWidth: '1200px',
          }}
        >
          <Logo flex="0 0 auto" />
          <Nav as="nav" alignSelf="center">
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
          <ButtonHamburger onClick={this.onHamburgerClick} active={this.state.active} />
        </Flex>
      </Header>
    )
  }
}
