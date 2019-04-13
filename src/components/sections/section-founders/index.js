import React from 'react'
import { CoreBox, CoreFlex } from '../../core-box'
import Text from '../../text'
import Img from 'gatsby-image'
import ButtonCTA from '../../button-cta'

const SectionFounders = ({ partners }) => {
  return (
    <CoreBox bg="beta" py={[6, 7]} px={[4, 5]} as="section">
      <CoreBox mb={4}>
        <Text
          color="theta"
          fontSize="alpha"
          fontFamily="beta"
          textAlign="center"
          css={{ maxWidth: 800 }}
          mx="auto"
          as="h2"
        >
          Meet our founding partners
        </Text>
      </CoreBox>
      <CoreFlex
        mx="auto"
        css={{ maxWidth: '800px' }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {partners &&
          partners.map(({ partnerName, fluid }) => (
            <CoreBox p={4} width={120} key={partnerName}>
              <Img
                fluid={fluid}
                fadeIn={true}
                critical={false}
                alt={partnerName}
                imgStyle={{ objectFit: 'contain' }}
              />
            </CoreBox>
          ))}
      </CoreFlex>
      <CoreFlex justifyContent="center" mt={[6,7]}>
          <ButtonCTA href="/partners/" mx="auto">View all our partners</ButtonCTA>
      </CoreFlex>
    </CoreBox>
  )
}

SectionFounders.defaultProps = {}

export default SectionFounders
