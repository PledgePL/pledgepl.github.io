import React from 'react'
import styled from '@emotion/styled'
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
    background-color: ${props => themeGet(`colors.beta`, '#fff')(props)};
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
      background-color 0.2s linear 0.3s;
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
  &[aria-current]:after,
  &:hover:after {
    transform: scaleX(1);
  }
  &[aria-current]:after {
    transition-delay: 0s, 0s;
    background-color: ${props => themeGet(`colors.delta`, '')(props)};
  }
`

const LinkButtonMenu = ButtonMenu.withComponent(Link)

export default React.memo(
  withTheme(({ theme, href, children }) => {
    return (
      <LinkButtonMenu href={href} p={[1, 2]}>
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
    )
  })
)
