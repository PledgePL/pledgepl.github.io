import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { CoreFlex } from '../core-box'
import { style } from 'styled-system'
import Text from '../text'
import Link from '../../utils/gatsby-link'

export default withTheme(
  ({ theme, href, children, size = 'large', type = 'alpha', ...props }) => {
    

    let paddingHorizontal
    let paddingVertical
    let borderRadius
    let fontSize
    let width = 'auto'
    let height = 'auto'

    switch (size) {
      case 'large':
        paddingHorizontal = 6
        paddingVertical = [3, 4]
        borderRadius = 8
        fontSize = 'eta'
        break
      case 'xsmall':
        paddingHorizontal = 4
        paddingVertical = [1, 2]
        borderRadius = 5
        fontSize = 'iota'
        break
      case 'icon':
        paddingHorizontal = 0
        paddingVertical = 0
        borderRadius = 5
        fontSize = 'iota'
        width = 40
        height = 40
        break
      default:
        paddingHorizontal = 6
        paddingVertical = [3, 4]
        borderRadius = 5
        fontSize = 'iota'
        break
    }

    let textTransform
    let bg
    let color
    let activeColor = 'beta'

    switch (type) {
      case 'beta':
        bg = 'transparent'
        color = 'delta'
        textTransform = 'uppercase'
        break
      case 'gamma':
        bg = 'beta'
        color = 'gamma'
        textTransform = 'none'
        break
      default:
        bg = 'delta'
        color = 'beta'
        textTransform = 'uppercase'
        break
    }

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
      color: ${color};
    `,
      {
        '&:hover': {
          backgroundColor: theme.colors.zeta,
          textDecoration: "none",
          color: theme.colors[activeColor]
        },
      },
      
      // attach the borderRadius to use the space arr in theme
      style({
        prop: 'borderradius',
        cssProperty: 'borderRadius',
        key: 'space',
      })
    )

    const LinkButtonCTA = ButtonCTA.withComponent(Link)

    return (
      <LinkButtonCTA
        href={href}
        {...props}
        pt={paddingVertical}
        pb={paddingVertical}
        pl={paddingHorizontal}
        pr={paddingHorizontal}
        borderradius={borderRadius}
        bg={bg}
        color={color}
        width={width}
        height={height}
      >
        {typeof children === 'string' ? (
          <Text
            inline={true}
            fontSize={fontSize}
            color="inherit"
            textTransform={textTransform}
            whiteSpace="nowrap"
            letterSpacing={1}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </LinkButtonCTA>
    )
  }
)
