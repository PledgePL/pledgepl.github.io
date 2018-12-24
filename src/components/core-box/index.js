import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/grid'
import { style } from 'styled-system'

const height = style({
  // React prop name
  prop: 'height',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'height',
  // key for theme values
  key: 'height',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: ['auto'],
})

const position = style({
  // React prop name
  prop: 'position',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'position',
  // key for theme values
  key: 'position',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: ['static'],
})

const lineHeight = style({
  // React prop name
  prop: 'lineHeight',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'lineHeight',
  // key for theme values
  key: 'lineHeight',
  // accessor function for transforming the value
  transformValue: n => (n ? `${n}` : ''),
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

const hidden = style({
  // React prop name
  prop: 'hide',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'display',
  // key for theme values
  key: 'hide',
  // accessor function for transforming the value
  transformValue: n => (n ? 'none' : 'inherit'),
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

export const CoreBox = styled(Box)`
  ${position}
  ${hidden}
  ${height}
  ${lineHeight}
`

export const CoreFlex = styled(Flex)`
  ${position}
  ${hidden}
  ${height}
  ${lineHeight}
`

export default CoreBox
