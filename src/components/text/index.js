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
      whiteSpace: props.whiteSpace,
    }
  }
)

const Text = props => {
  // Get the font size value from the theme
  // Need to do this, as fontSize does not support array from named theme properties
  props = {
    ...props,
    fontSize: themeGet(`fontSizes.${props.fontSize}`, props.fontSize)(props),
    lineHeight:
      props.lineHeight ||
      themeGet(`lineHeights.${props.fontSize}`, null)(props),
  }
  return <CustomBox m={0} p={0} {...props} />
}

Text.defaultProps = {
  as: 'span',
  fontFamily: 'alpha',
  fontWeight: 'alpha',
  textTransform: null,
  fontSize: 'eta',
  whiteSpace: null,
  color: 'alpha',
}

export default React.memo(withTheme(Text))
