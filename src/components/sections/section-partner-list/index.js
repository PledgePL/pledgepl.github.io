import React from 'react'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import PartnerBox from '../../partner-box'

const SectionPartnerList = ({ partners, title, description }) => {
  return (
    <CoreBox bg="beta" py={[6, 7]} px={[4, 5]} as="section">
      <CoreBox mb={7}>
        {title && (
          <Text
            color="theta"
            fontSize="alpha"
            fontFamily="beta"
            textAlign="center"
            css={{ maxWidth: 800 }}
            mx="auto"
            as="h2"
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            color="theta"
            as="p"
            textAlign="center"
            mx="auto"
            css={{ maxWidth: 800 }}
          >
            {description}
          </Text>
        )}
      </CoreBox>
      <CoreGrid
        gridTemplateColumns={[
          '1fr 1fr',
          '1fr 1fr',
          '1fr 1fr 1fr',
          '1fr 1fr 1fr 1fr',
        ]}
        gridGap={[4, 5]}
        mx="auto"
        css={{ maxWidth: '1200px' }}
      >
        {partners &&
          partners.map(
            ({ partnerName, url, policyUrl, logoUrl: { cloudinaryUrl } }) => (
              <PartnerBox
                name={partnerName}
                src={cloudinaryUrl}
                url={url}
                policyUrl={policyUrl}
              />
            )
          )}
      </CoreGrid>
    </CoreBox>
  )
}

SectionPartnerList.defaultProps = {
  partners: [],
  title: "Partnet List",
  description: null,
}

export default SectionPartnerList
