import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize,
  flexbox,
  layout,
  lineHeight,
  textAlign,
  position,
  grid,
  gridColumn,
  compose,
} from 'styled-system'


export const CoreBox = styled('div')(
  compose(
    space,
    layout,
    fontSize,
    textAlign,
    lineHeight,
    color,
    position,
    gridColumn
  )
)

export const CoreFlex = styled(CoreBox)(
  compose(
    flexbox
  )
)

CoreFlex.defaultProps = {
  display: 'flex'
}

export const CoreGrid = styled(CoreFlex)(
  compose(
    grid
  )
)

CoreGrid.defaultProps = {
  display: 'grid'
}

export default CoreBox
