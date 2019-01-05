import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { CoreBox } from '../core-box'
import { style } from 'styled-system'
import Text from '../text'
import Link from '../../utils/gatsby-link'

export default withTheme(
  ({ theme, href, children, size = 'large', css = {} }) => {
    const isLarge = size === 'large'

    const ButtonCTA = styled(CoreBox)(
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
        prop: 'borderradius',
        cssProperty: 'borderRadius',
        key: 'space',
      })
    )

    const paddingHorizontal = isLarge ? 6 : 6
    const paddingVertical = isLarge ? [3, 4] : [3, 4]
    const borderRadius = isLarge ? 8 : 5
    const fontSize = isLarge ? 'eta' : 'iota'

    const LinkButtonCTA = ButtonCTA.withComponent(Link)

    return (
      <LinkButtonCTA
        href={href}
        {...{ css }}
        pt={paddingVertical}
        pb={paddingVertical}
        pl={paddingHorizontal}
        pr={paddingHorizontal}
        borderradius={borderRadius}
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
      </LinkButtonCTA>
    )
  }
)
