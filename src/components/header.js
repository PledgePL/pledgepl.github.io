import React from 'react'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Logo from './logo'
import Text from './text'

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
  align-items: stretch;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`

export default withTheme((props) => (
  <Header>
    <HeaderContent>
      <div className="header__content__logo">
        <Logo />
      </div>
      <div>
        <Text textColor="textColor1" inline={true}>Hello World</Text>
      </div>
    </HeaderContent>
  </Header>
))
