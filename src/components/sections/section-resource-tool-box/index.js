import React from 'react'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import InfoBox from '../../info-box'
import Tile from '../../tile'

const SectionResourceToolBox = () => {
  return (
    <CoreBox bg="epsilon" py={[6, 7]} px={[4, 5]} as="section">
      <Text
        color="theta"
        fontSize="alpha"
        fontFamily="beta"
        textAlign="center"
        mb={7}
        css={{ maxWidth: 800 }}
        mx={'auto'}
        as="h2"
      >
        Resource Tool Box
      </Text>
      <CoreGrid
        gridTemplateColumns={['100%', '1fr 1fr', '1fr 1fr 1fr']}
        gridGap={[4, 5]}
        mx="auto"
        css={{ maxWidth: '1200px' }}
      >
        <InfoBox title="Parental leave template">
          If you’re not sure where to start, this is a great place.
        </InfoBox>
        <InfoBox title="Paid salary leave example">
          How much will it cost you to give someone paid leave?
        </InfoBox>
        <InfoBox title="Press Kit">
          Press releases, logos, coverage; you’ll find it all here.
        </InfoBox>
      </CoreGrid>
    </CoreBox>
  )
}

SectionResourceToolBox.defaultProps = {}

export default SectionResourceToolBox
