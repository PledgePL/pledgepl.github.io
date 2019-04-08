import styled from '@emotion/styled'
import {
  style,
  space,
  color,
  fontSize,
  width,
  lineHeight,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  get,
  px,
  num
} from 'styled-system'

const getSpace = (n, scale) => {
  if (!num(n)) {
    return px(get(scale, n, n))
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute)
  if (!num(value)) {
    return isNegative ? '-' + value : value
  }
  return px(value * (isNegative ? -1 : 1))
}

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
  transformValue: getSpace,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

const gridRowGap = style({
  // React prop name
  prop: 'gridRowGap',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'grid-row-gap',
  // key for theme values
  key: 'space', // use the space values
  // accessor function for transforming the value
  transformValue: getSpace,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

const gridColumnGap = style({
  // React prop name and CSS property
  prop: 'gridColumnGap',
  // CSS property (if different from prop argument)
  cssProperty: 'grid-column-gap',
  // key for theme values
  key: 'space',
  // accessor function for transforming the value
  transformValue: getSpace,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

const gridColumn = style({
  // React prop name
  prop: 'gridColumn',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'grid-column',
  // key for theme values
  key: 'space', // use the space values
  // accessor function for transforming the value
  transformValue: getSpace,
  // add a fallback scale object or array, if theme is not present
  scale: [],
})

export const CoreBox = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${hidden({ display: 'block' })}
  ${height}
  ${lineHeight}
  ${gridColumn}
`

export const CoreFlex = styled(CoreBox)`
  display: flex;
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${hidden({ display: 'flex' })}
`

export const CoreGrid = styled(CoreFlex)`
  display: grid;
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap}
  ${gridRowGap}
  ${gridColumnGap}
`

export default CoreBox
