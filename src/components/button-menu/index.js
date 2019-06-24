import React from 'react'
import styled from '@emotion/styled'
import { Match } from '@reach/router'
import Text from '../text'
import { CoreBox, CoreFlex } from '../core-box'
import Link from '../../utils/gatsby-link'
import {themeGet} from '@styled-system/theme-get'

const ButtonMenu = styled(CoreFlex)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: none;
  outline: none;
  -webkit-appearance: none;
  text-decoration: none;
  &:hover > span:last-child {
    transform: scaleX(1);
  }
`

const Line = styled(CoreBox)`
  width: 100%;
  background-color: ${props =>
    themeGet(props.active ? 'colors.delta' : 'colors.beta', '#fff')(props)};
  transform-origin: center;
  transform: ${props => `scaleX(${props.active ? 1 : 0})`};
  transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
    background-color 0.2s linear 0s;
  transition-delay: ${props => (props.active ? '0s, 0s' : '0s, 0.2s')};
`

const LinkButtonMenu = ButtonMenu.withComponent(Link)

export default ({ href, children, ...props }) => {
  const p = [1, 2]
  const lineHeight = ['3px', '5px']
  const lineMarginBottom = lineHeight.map(value => `-${value}`)

  return (
    <Match path={href}>
      {value => (
        <LinkButtonMenu href={href} p={p} {...props}>
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
          <Line
            as="span"
            mb={lineMarginBottom}
            height={lineHeight}
            active={value.match}
          />
        </LinkButtonMenu>
      )}
    </Match>
  )
}
