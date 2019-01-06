import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { CoreFlex } from '../core-box'
import { style } from 'styled-system'
import Text from '../text'
import Link from '../../utils/gatsby-link'

export default withTheme(
  ({ theme, href, children, size = 'large', type = 'alpha', css = {} }) => {
    const isLarge = size === 'large'
    const isTypeAlpha = type === 'alpha'

    const ButtonCTA = styled(CoreFlex)(
      `
      display: inline-block;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      outline: none;
      -webkit-appearance: none;
      text-decoration: none;
      text-align: center;
      &:hover {
        background-color: ${
          isTypeAlpha ? theme.colors.zeta : theme.colors.zeta
        };
        color: ${theme.colors.beta};
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
    const bg = isTypeAlpha ? 'delta' : 'transparent'
    const color = isTypeAlpha ? 'beta' : 'delta'

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
        bg={bg}
        color={color}
      >
        <Text
          inline={true}
          fontSize={fontSize}
          color="inherit"
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
