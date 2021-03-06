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

const hidden = ({ display = 'block' }) =>
  style({
    // React prop name
    prop: 'hide',
    // The corresponding CSS property (defaults to prop argument)
    cssProperty: 'display',
    // key for theme values
    key: 'hide',
    // accessor function for transforming the value
    transformValue: n => (n ? 'none' : display),
    // add a fallback scale object or array, if theme is not present
    scale: [],
  })

const gridTemplateColumns = style({
  // React prop name
  prop: 'gridTemplateColumns',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'grid-template-columns',
  // key for theme values
  key: 'gridTemplateColumns',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: ['auto'],
})

const gridTemplateRows = style({
  // React prop name
  prop: 'gridTemplateRows',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'grid-template-rows',
  // key for theme values
  key: 'gridTemplateRows',
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

const gridGap = style({
  // React prop name
  prop: 'gridGap',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'grid-gap',
  // key for theme values
  key: 'space', // use the space values
  // accessor function for transforming the value
  transformValue: n => n,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

export const CoreBox = styled(Box)`
  ${position}
  ${hidden({ display: 'block' })}
  ${height}
  ${lineHeight}
`

export const CoreFlex = styled(Flex)`
  ${position}
  ${hidden({ display: 'flex' })}
  ${height}
  ${lineHeight}
`

export const CoreGrid = styled(CoreFlex)`
  display: grid;
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
`

export default CoreBox
