import React from 'react'
import { CoreBox } from '../core-box'
import Text from '../text'
import Tile from '../tile'

const InfoBox = ({ icon, title, children }) => {
  return (
    <Tile>
      <CoreBox mx="auto">
        {title && (
          <Text
            color="theta"
            fontSize="epsilon"
            fontFamily="beta"
            as="h3"
            textAlign="left"
            mb={4}
          >
            {title}
          </Text>
        )}
        {children && (
          <Text
            color="theta"
            fontSize="eta"
            fontFamily="alpha"
            textAlign="left"
            as="p"
          >
            {children}
          </Text>
        )}
      </CoreBox>
    </Tile>
  )
}

InfoBox.defaultProps = {
  title: null,
  children: null,
}

export default InfoBox
