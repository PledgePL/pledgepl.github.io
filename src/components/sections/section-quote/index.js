import React from 'react'
import styled from '@emotion/styled'
import { CoreBox } from '../../core-box'
import Text from '../../text'
import { QuoteStart, QuoteEnd } from '../../icons'

const QuoteStartContainer = styled(CoreBox)`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  transform: translateX(-150%);
`

const QuoteEndContainer = styled(CoreBox)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  transform: translateX(150%);
`

const SectionQuote = ({}) => {
  return (
    <CoreBox bg="gamma" py={[6, 7]} px={[4, 5]} as="section">
      <Text
        color="beta"
        fontSize="alpha"
        fontFamily="beta"
        textAlign="center"
        css={{ maxWidth: 800 }}
        mx="auto"
        as="h2"
      >
        Bill de Blasio
      </Text>
      <Text
        color="beta"
        as="p"
        textAlign="center"
        mx="auto"
        mb={5}
        css={{ maxWidth: 800 }}
      >
        Mayor of New York City
      </Text>
      <CoreBox px={[6, 7]} mt={[6, 7]} mb={6}>
        <Text
          color="beta"
          fontFamily="beta"
          as="blockquote"
          textAlign="center"
          mx="auto"
          css={{
            maxWidth: 800,
            position: 'relative'
          }}
        >
          <QuoteStartContainer width={[25, 40]} role="presentation" aria-hidden="true">
            <QuoteStart />
          </QuoteStartContainer>
          Too many parents face an impossible choice: Their new child, or their
          paycheck. Our administration is proud to lead by example by providing
          fully paid parental leave to City employees. Yet the United States
          still lags behind the rest of the world in offering this vital, basic
          benefit. That’s why leadership from businesses like those in the
          Pledge Parental Leave coalition is vital – and we need others to
          quickly follow suit.
          <QuoteEndContainer width={[25, 40]} role="presentation" aria-hidden="true">
            <QuoteEnd />
          </QuoteEndContainer>
        </Text>
      </CoreBox>
    </CoreBox>
  )
}

SectionQuote.defaultProps = {}

export default SectionQuote
