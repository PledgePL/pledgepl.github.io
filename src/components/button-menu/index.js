import React from 'react'
import styled from '@emotion/styled'
import { Match } from '@reach/router'
import { withTheme } from 'emotion-theming'
import { themeGet } from 'styled-system'
import Text from '../text'
import { mq } from '../../styles/theme'
import { CoreBox } from '../core-box'
import Link from '../../utils/gatsby-link'

const ButtonMenu = styled(CoreBox)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  -webkit-appearance: none;
  text-decoration: none;
  &:after {
    content: '';
    position: absolute;
    background-color: ${props =>
      themeGet(props.active ? 'colors.delta' : 'colors.beta', '#fff')(props)};
    transform-origin: center;
    transform: ${props => `scaleX(${props.active ? 1 : 0})`};
    transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
      background-color 0.2s linear 0s;
    transition-delay: ${props => (props.active ? '0s, 0s' : '0s, 0.2s')};
    ${props => {
      return mq({
        height: [3, 5],
        bottom: props.p.map(_ => {
          const pValue = themeGet(`space.${_}`, _)(props)
          return `${pValue / 2}px`
        }),
        width: props.p.map(_ => {
          const pValue = themeGet(`space.${_}`, _)(props)
          return `calc(100% - ${pValue * 2}px)`
        }),
      })
    }};
  }
  &:hover:after {
    transform: scaleX(1);
  }
`

const LinkButtonMenu = ButtonMenu.withComponent(Link)

export default ({ href, children }) => {
  const isActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: 'active' } : null
  }

  return (
    <Match path={href}>
      {props => (
        <LinkButtonMenu href={href} p={[1, 2]} active={props.match}>
          <Text
            inline={true}
            color="beta"
            fontFamily="beta"
            textColor="textColor2"
            textSize="eta"
            textAlign="center"
            whiteSpace="nowrap"
            letterSpacing={0.5}
          >
            {children}
          </Text>
        </LinkButtonMenu>
      )}
    </Match>
  )
}
