import React from 'react'
import { CoreBox } from '../core-box'
import Text from '../text'
import Tile from '../tile'

const InfoBox = ({ header, title, children }) => {
  return (
    <Tile>
      <CoreBox mx="auto" mb={[2, 4]}>
        {header && <CoreBox mb={[2, 5]}>{header()}</CoreBox>}
        {title && (
          <Text
            color="theta"
            fontSize="epsilon"
            fontFamily="beta"
            as="h3"
            textAlign="left"
            mb={[3, 4]}
          >
            {title}
          </Text>
        )}
        {children}
      </CoreBox>
    </Tile>
  )
}

InfoBox.defaultProps = {
  header: null,
  title: null,
  children: null,
}

export default InfoBox
