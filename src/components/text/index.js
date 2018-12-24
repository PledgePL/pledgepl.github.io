import React from 'react'
import styled from '@emotion/styled'
import { CoreBox } from '../core-box'
import { withTheme } from 'emotion-theming'
import { fontFamily, fontWeight, letterSpacing, themeGet } from 'styled-system'

const CustomBox = styled(CoreBox)(
  fontFamily,
  fontWeight,
  letterSpacing,
  props => {
    return {
      textTransform: props.textTransform,
      textAlign: props.textAlign,
      whiteSpace: props.whiteSpace,
    }
  },
  `
    a {
      color: inherit;
    }
  `
)

const Text = props => {
  // Get the font size value from the theme
  // Need to do this, as fontSize does not support array from named theme properties
  props = {
    ...props,
    fontSize: themeGet(`fontSizes.${props.fontSize}`, props.fontSize)(props),
    lineHeight: themeGet(`lineHeights.${props.fontSize}`, props.fontSize)(
      props
    ),
  }
  return <CustomBox m={0} p={0} {...props} />
}

Text.defaultProps = {
  as: 'span',
  fontFamily: 'alpha',
  fontWeight: 'alpha',
  textTransform: null,
  textAlign: 'inherit',
  fontSize: 'eta',
  whiteSpace: null,
  color: 'alpha',
}

export default withTheme(Text)
