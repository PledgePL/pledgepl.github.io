import React from 'react'
import { CoreFlex } from '../core-box'

const AspectRatio = ({ ratio, children, css = {}, ...props }) => {
  return (
    <CoreFlex
      {...props}
      css={{ ...css, overflow: 'hidden' }}
      pt={`calc(${ratio} * 100%)`}
      flex="1 1 auto"
      position="relative"
    >
      <CoreFlex
        position="absolute"
        width="100%"
        height="100%"
        css={{ top: 0, left: 0 }}
      >
        {children}
      </CoreFlex>
    </CoreFlex>
  )
}

AspectRatio.defaultProps = {
  ratio: 1,
  children: null,
}

export default AspectRatio
