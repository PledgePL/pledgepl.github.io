import React from 'react'
import { CoreFlex } from '../core-box'
import { Play } from '../icons'
import Text from '../text'

export default ({ children, ...props }) => {
  return (
    <CoreFlex
      flexDirection="row"
      alignItems="center"
      as="button"
      css={{
        backgroundColor: 'transparent',
        border: 0,
        '-webkit-appearance': 'none',
        cursor: 'pointer',
      }}
      {...props}
    >
      <Play css={{ flex: '0 0 auto' }} />
      <Text
        color="beta"
        fontSize="eta"
        fontFamily="alpha"
        pl={3}
        as="span"
        textAlign="left"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </CoreFlex>
  )
}
