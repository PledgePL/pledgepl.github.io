import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import Text from '../text'
import { mq } from '../../styles/theme'
import { CoreBox } from '../core-box'
import Link from '../../utils/gatsby-link'

export default withTheme(({ theme, href, children }) => {
  const ButtonMenu = styled(CoreBox)`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    -webkit-appearance: none;
    text-decoration: none;
    text-align: center;
    ${mq({
      padding: theme.spacingUnit1,
    })}
    &:after {
      content: '';
      position: absolute;
      background-color: #fff;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
        background-color 0.2s linear 0.2s;
      ${mq({
        bottom: [1, 2],
        left: theme.spacingUnit1,
        height: [3, 5],
        width: theme.spacingUnit1.map(_ => `calc(100% - ${_ * 2}px)`),
      })}
    }
    &[aria-current]:after,
    &:hover:after {
      transform: scaleX(1);
    }
  `

  const LinkButtonMenu = ButtonMenu.withComponent(Link)

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { isCurrent } : { isCurrent }
  }

  return (
    <LinkButtonMenu href={href} getProps={isActive}>
      <Text
        inline={true}
        color="beta"
        fontFamily="beta"
        textColor="textColor2"
        textSize={'eta'}
        whiteSpace="nowrap"
        letterSpacing={0.5}
      >
        {children}
      </Text>
    </LinkButtonMenu>
  )
})
