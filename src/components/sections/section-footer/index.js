import React from 'react'
import { withTheme } from 'emotion-theming'
import { CoreBox, CoreFlex } from '../../core-box'
import Text from '../../text'
import Logo from '../../logo'

const SectionFooter = ({ theme }) => {
  return (
    <CoreBox
      bg="epsilon"
      py={[5, 6]}
      px={[4, 5]}
      as="footer"
      css={{ borderTop: `${theme.colors.beta} 2px solid` }}
    >
      <CoreFlex justifyContent="center" mb={5}>
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
          creative industries in the United States to guarantee their employees
          a meaningful minimum standard of parental leave benefits.
        </Text>
        <Text
          color="alpha"
          fontSize="lamda"
          fontFamily="alpha"
          textAlign="center"
          mb={2}
          as="p"
        >
          &copy; 2019 Pledge Parental Leave | Privacy Policy
        </Text>
      </CoreBox>
    </CoreBox>
  )
}

SectionFooter.defaultProps = {}

export default withTheme(SectionFooter)
