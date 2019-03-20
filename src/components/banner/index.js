import React from 'react'
import { CoreBox } from '../core-box'
import Text from '../text'

const Banner = ({ title, children }) => {
  return (
    <CoreBox bg="gamma" py={[6, 7]} px={[6, 7]}>
      <CoreBox css={{ maxWidth: 1000 }} mx="auto">
        {title && (
          <Text
            color="beta"
            mb={3}
            fontSize="alpha"
            fontFamily="beta"
            as="h1"
            textAlign="center"
          >
            {title}
          </Text>
        )}
        {children && (
          <Text color="beta" as="p" textAlign="center" mb={5}>
            {children}
          </Text>
        )}
      </CoreBox>
    </CoreBox>
  )
}

Banner.defaultProps = {
  title: null,
  children: null,
}

export default Banner
