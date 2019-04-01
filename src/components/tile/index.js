import React from 'react'
import { CoreBox } from '../core-box'
import { withTheme } from 'emotion-theming'

const Tile = ({ theme, padding, children, ...props }) => {
  return children ? (
    <CoreBox
      bg="beta"
      py={padding ? [5, 6] : 0}
      px={padding ? [4, 5] : 0}
      css={{
        borderWidth: '1px',
        borderColor: theme.colors.gamma,
        borderStyle: 'solid',
      }}
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

export default withTheme(Tile)
