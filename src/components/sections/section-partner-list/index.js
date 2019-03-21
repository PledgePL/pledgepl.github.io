import React from 'react'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import PartnerBox from '../../partner-box'

const SectionPartnerList = ({ partners, title }) => {
  return (
    <CoreBox bg="beta" py={[6, 7]} px={[4, 5]} as="section">
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
        {title}
      </Text>
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
          partners.map(({ partnerName, url, policyUrl, logoUrl: { cloudinaryUrl } }) => (
            <PartnerBox name={partnerName} src={cloudinaryUrl} url={url} policyUrl={policyUrl} />
          ))}
      </CoreGrid>
    </CoreBox>
  )
}

SectionPartnerList.defaultProps = {
  partners: [],
}

export default SectionPartnerList
