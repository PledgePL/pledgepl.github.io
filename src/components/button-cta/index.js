import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { Box } from '@rebass/grid'
import { style } from 'styled-system'
import Text from '../text'

export default withTheme(
  ({ theme, href, children, size = 'large', css = {} }) => {
    const isLarge = size === 'large'

    const ButtonCTA = styled(Box)(
      `
      background-color: ${theme.bgColor3};
      display: inline-block;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      outline: none;
      -webkit-appearance: none;
      text-decoration: none;
      text-align: center;
      &:hover {
        background-color: ${theme.bgColor3Active};
      }
    `,
      // attach the borderRadius to use the space arr in theme
      style({
        prop: 'borderRadius',
        cssProperty: 'borderRadius',
        key: 'space',
      })
    )

    const paddingHorizontal = isLarge ? 7 : 6
    const paddingVertical = isLarge ? [4, 5] : [3, 4]
    const borderRadius = isLarge ? 6 : 5
    const fontSize = isLarge ? 'eta' : 'iota'

    return (
      <ButtonCTA
        {...{ href, css }}
        pt={paddingVertical}
        pb={paddingVertical}
        pl={paddingHorizontal}
        pr={paddingHorizontal}
        borderRadius={borderRadius}
      >
        <Text
          inline={true}
          color="beta"
          fontSize={fontSize}
          textTransform="uppercase"
          whiteSpace="nowrap"
          letterSpacing={1}
        >
          {children}
        </Text>
      </ButtonCTA>
    )
  }
)
