import React from 'react'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import InfoBox from '../../info-box'
import { Paper, Chart, Stack } from '../../icons'

const IconContainer = ({ children }) => {
  return (
    <CoreBox css={{ width: 75, height: 'auto', margin: 'auto' }}>
      {children}
    </CoreBox>
  )
}

const TextLink = ({ children, ...props }) => {
  return (
    <Text
      color="delta"
      fontSize="eta"
      fontFamily="alpha"
      textAlign="left"
      {...props}
      as="a"
    >
      {children}
    </Text>
  )
}

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
        <InfoBox
          title="Parental leave template"
          header={() => (
            <IconContainer>
              <Paper />
            </IconContainer>
          )}
        >
          <>
            <Text
              color="theta"
              fontSize="eta"
              fontFamily="alpha"
              textAlign="left"
              mb={[2, 4]}
              as="p"
            >
              If you’re not sure where to start, this is a great place.
            </Text>
            <ul>
              <CoreBox as="li" mb={[null, null]}>
                <TextLink href="#">Download Word Document</TextLink>
              </CoreBox>
              <CoreBox as="li" mt={[null, null]}>
                <TextLink href="#">Download PDF</TextLink>
              </CoreBox>
            </ul>
          </>
        </InfoBox>
        <InfoBox
          title="Paid salary leave example"
          header={() => (
            <IconContainer>
              <Chart />
            </IconContainer>
          )}
        >
          <>
            <Text
              color="theta"
              fontSize="eta"
              fontFamily="alpha"
              textAlign="left"
              mb={[2, 4]}
              as="p"
            >
              How much will it cost you to give someone paid leave?
            </Text>
            <ul>
              <CoreBox as="li">
                <TextLink href="#">Download PDF</TextLink>
              </CoreBox>
            </ul>
          </>
        </InfoBox>
        <InfoBox
          title="Press Kit"
          header={() => (
            <IconContainer>
              <Stack />
            </IconContainer>
          )}
        >
          <>
            <Text
              color="theta"
              fontSize="eta"
              fontFamily="alpha"
              textAlign="left"
              mb={[2, 4]}
              as="p"
            >
              Press releases, logos, coverage; you’ll find it all here.
            </Text>
            <ul>
              <CoreBox as="li">
                <TextLink href="#">Download press kit (.zip)</TextLink>
              </CoreBox>
            </ul>
          </>
        </InfoBox>
      </CoreGrid>
    </CoreBox>
  )
}

SectionResourceToolBox.defaultProps = {}

export default SectionResourceToolBox
