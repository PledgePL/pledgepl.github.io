import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import Text from '../text'
import { mq } from '../../styles/theme'

export default withTheme(({ theme, href, children, size = 'large' }) => {
  const isLarge = size === 'large'
  const heightMultiplier = isLarge ? 11 : 8

  const ButtonCTA = styled(href ? 'a' : 'button')`
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
    &:hover:after {
      transform: scaleX(1);
    }
  `

  return (
    <ButtonCTA {...{ href }}>
      <Text
        inline={true}
        color="beta"
        fontFamily="beta"
        textColor="textColor2"
        textSize={'eta'}
        whiteSpace="nowrap"
      >
        {children}
      </Text>
    </ButtonCTA>
  )
})
