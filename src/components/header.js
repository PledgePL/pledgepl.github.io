import React from 'react'
import styled from '@emotion/styled'
import { CoreBox, CoreFlex } from './core-box'
import Logo from './logo'
import ButtonCTA from './button-cta'
import ButtonMenu from './button-menu'
import ButtonHamburger from './button-hamburger'

const Header = styled(CoreFlex)`
  position: fixed;
  background-color: ${props => props.theme.bgColor2};
  width: 100%;
  box-shadow: 0 0 20px rgba(75, 0, 255, 0.44);
`
const Nav = styled(CoreFlex)`
  flex-wrap: nowrap;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const NavItem = props => (
  <CoreBox pt={[4, 0]} pb={[4, 0]} pl={[0, 4]} pr={[0, 4]} {...props} />
)
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.onHamburgerClick = this.onHamburgerClick.bind(this)
    this.state = {
      active: false,
    }
  }

  onHamburgerClick() {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { active } = this.state
    const headerHeight = [60, 84]
    const activeHeaderHeight = active
      ? ['100vh'].concat(headerHeight.slice(1))
      : headerHeight

    return (
      <>
        <Header
          as="header"
          alignItems="flex-start"
          justifyContent="center"
          height={activeHeaderHeight}
        >
          <CoreFlex
            alignItems="center"
            justifyContent="space-between"
            maxWidth="1200"
            width="100%"
            height={headerHeight}
            p={3}
            css={{
              maxWidth: '1200px',
            }}
          >
            <Logo />
            <Nav
              as="nav"
              alignSelf="center"
              alignItems="center"
              justifyContent="center"
              position={['fixed', 'static']}
              flexDirection={['column', 'row']}
              hide={[!active, false]}
            >
              <NavItem>
                <ButtonMenu href="/why-pledge">Why Pledge</ButtonMenu>
              </NavItem>
              <NavItem>
                <ButtonMenu href="/partners">Our Partners</ButtonMenu>
              </NavItem>
              <NavItem>
                <ButtonMenu href="/support">Support</ButtonMenu>
              </NavItem>
            </Nav>
            <CoreBox hide={[true, false]}>
              <ButtonCTA href="/join-us" size="small">
                Join us today
              </ButtonCTA>
            </CoreBox>
            <CoreBox hide={[false, true]}>
              <ButtonHamburger
                onClick={this.onHamburgerClick}
                active={this.state.active}
              />
            </CoreBox>
          </CoreFlex>
        </Header>
        <CoreBox height={headerHeight} />
      </>
    )
  }
}
