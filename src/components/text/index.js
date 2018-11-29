import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@rebass/grid'
import { withTheme } from 'emotion-theming'
import { fontFamily, fontWeight, letterSpacing, themeGet } from 'styled-system'

const CustomBox = styled(Box)(
  fontFamily,
  fontWeight,
  letterSpacing,
  props => {
    return ({
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace
    })
  }  
)

const Text = props => {
  // Get the font size value from the theme
  // Need to do this, as fontSize does not support array from named theme properties
  props = {
    ...props,
    fontSize: themeGet(`fontSizes.${props.fontSize}`, null)(props)
  }
  return <CustomBox {...props} />
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

export default withTheme(Text)
