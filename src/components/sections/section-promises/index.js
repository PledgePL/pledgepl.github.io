import React from 'react'
import styled from '@emotion/styled'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import InfoBox from '../../info-box'
import { Briefcase, Money, Eye, Shield } from '../../icons'

const IconContainer = ({ children }) => {
  return (
    <CoreBox css={{ width: 75, height: 'auto', margin: 'auto' }}>
      {children}
    </CoreBox>
  )
}

const InfoBoxDescription = ({ children }) => {
  return (
    <Text
      color="theta"
      fontSize="eta"
      fontFamily="alpha"
      textAlign="center"
      mb={[2, 4]}
      as="p"
    >
      {children}
    </Text>
  )
}

const SectionPromises = ({}) => {
  return (
    <CoreBox bg="epsilon" py={[6, 7]} px={[4, 5]} as="section">
      <Text
        color="theta"
        fontSize="alpha"
        fontFamily="beta"
        textAlign="center"
        css={{ maxWidth: 800 }}
        mx="auto"
        mb={7}
        as="h2"
      >
        Four simple promises, one monumental statement
      </Text>
      <CoreGrid
        gridTemplateColumns={['100%', '1fr 1fr', '1fr 1fr 1fr 1fr']}
        gridGap={[6, 7]}
        mx="auto"
        css={{ maxWidth: '1200px' }}
      >
        <InfoBox
          hasTile={false}
          title="3 Months Paid Leave"
          textAlign="center"
          header={() => (
            <IconContainer>
              <Money />
            </IconContainer>
          )}
        >
          <InfoBoxDescription>
            Fully paid leave for the primary caregiver
          </InfoBoxDescription>
        </InfoBox>
        <InfoBox
          hasTile={false}
          title="3 Months Medical Coverage"
          textAlign="center"
          header={() => (
            <IconContainer>
              <Shield />
            </IconContainer>
          )}
        >
          <InfoBoxDescription>
            Uninterrupted medical insurance coverage
          </InfoBoxDescription>
        </InfoBox>
        <InfoBox
          hasTile={false}
          title="6 Months Job Security"
          textAlign="center"
          header={() => (
            <IconContainer>
              <Briefcase />
            </IconContainer>
          )}
        >
          <InfoBoxDescription>
            Return to the same or similar role, guaranteed
          </InfoBoxDescription>
        </InfoBox>
        <InfoBox
          hasTile={false}
          title="Open Policy"
          textAlign="center"
          header={() => (
            <IconContainer>
              <Eye />
            </IconContainer>
          )}
        >
          <InfoBoxDescription>
            Commitment to making the policy openly available online
          </InfoBoxDescription>
        </InfoBox>
      </CoreGrid>
    </CoreBox>
  )
}

SectionPromises.defaultProps = {}

export default SectionPromises
