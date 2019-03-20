import React from 'react'
import { CoreBox } from '../core-box'
import { withTheme } from 'emotion-theming'

const Tile = ({ theme, children }) => {
  return children ? (
    <CoreBox
      bg="beta"
      py={[5, 6]}
      px={[4, 5]}
      css={{
        borderWidth: '1px',
        borderColor: theme.colors.gamma,
        borderStyle: 'solid',
      }}
    >
      {children}
    </CoreBox>
  ) : null
}

Tile.defaultProps = {
  children: null,
}

export default withTheme(Tile)
