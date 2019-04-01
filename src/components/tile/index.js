import React from 'react'
import { CoreBox } from '../core-box'
import css from '@styled-system/css'

const Tile = ({ theme, padding, children, ...props }) => {
  return children ? (
    <CoreBox
      bg="beta"
      py={padding ? [5, 6] : 0}
      px={padding ? [4, 5] : 0}
      css={css({
        ...props.css,
        borderWidth: '1px',
        borderColor: 'gamma',
        borderStyle: 'solid',
      })}
      {...props}
    >
      {children}
    </CoreBox>
  ) : null
}

Tile.defaultProps = {
  padding: true,
  children: null,
}

export default Tile
