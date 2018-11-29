import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import Logo from './logo'
import ButtonCTA from './button-cta'
import ButtonMenu from './button-menu'

const Header = styled('header')`
  background-color: ${props => props.theme.bgColor2};
  width: 100%;
  height: 90px;
  box-shadow: 0 0 20px rgba(75, 0, 255, 0.44);
`

const HeaderContent = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`

export default withTheme(props => (
  <Header>
    <HeaderContent>
      <div className="header__content__logo">
        <Logo />
      </div>
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
    </HeaderContent>
  </Header>
))
