import React from 'react'
import { withTheme } from 'emotion-theming'
import { CoreBox, CoreFlex, CoreGrid } from '../../core-box'
import Text from '../../text'
import Logo from '../../logo'
import ButtonCTA from '../../button-cta'
import { Email, Twitter } from '../../icons'

const SectionFooter = ({ theme }) => {
  const year = new Date().getFullYear()

  return (
    <CoreFlex
      bg="epsilon"
      as="footer"
      flexDirection="column"
      position="relative"
      mx="auto"
      css={{
        '::before': {
          content: '""',
          top: 0,
          height: 0,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          borderTop: `${theme.colors.beta} 2px solid`,
        },
      }}
    >
      <CoreGrid
        gridTemplateColumns={['1fr', '1fr auto 1fr']}
        gridRowGap={[5, 0]}
        alignItems={'center'}
        width="100%"
        css={{ maxWidth: 1000 }}
        mx="auto"
        py={[5, 6]}
        px={[4, 5]}
      >
        <CoreFlex justifyContent={['center', 'flex-start']}>
          <Logo type="purple" size="small" />
        </CoreFlex>
        <CoreBox css={{ maxWidth: 500 }} mx={'auto'}>
          <Text
            color="alpha"
            fontSize="lamda"
            fontFamily="alpha"
            textAlign="center"
            mb={2}
            as="p"
          >
            Pledge Parental Leave [PPL] exists to encourage companies in the
            creative industries in the United States to guarantee their
            employees a meaningful minimum standard of parental leave benefits.
          </Text>
          <Text
            color="alpha"
            fontSize="lamda"
            fontFamily="alpha"
            textAlign="center"
            mb={2}
            as="p"
          >
            &copy; {year} Pledge Parental Leave{/* | Privacy Policy */}
          </Text>
        </CoreBox>
        <CoreFlex justifyContent={['center', 'flex-end']}>
          <CoreGrid gridTemplateColumns={'1fr 1fr'} gridColumnGap={[2]}>
            <ButtonCTA size="icon" href="mailto:team@pledgepl.org">
              <Email />
            </ButtonCTA>
            <ButtonCTA
              size="icon"
              href="https://twitter.com/pledgepl"
              target="_blank"
            >
              <Twitter />
            </ButtonCTA>
          </CoreGrid>
        </CoreFlex>
      </CoreGrid>
    </CoreFlex>
  )
}

SectionFooter.defaultProps = {}

export default withTheme(SectionFooter)
