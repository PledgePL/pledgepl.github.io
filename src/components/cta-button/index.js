import React from 'react'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Text from '../text'
import { mq } from '../../styles/theme'

export default withTheme(({ theme, href, children }) => {
  const CTAButton = styled(href ? 'a' : 'button')`
    background-color: ${theme.bgColor3};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 50%;
    -webkit-appearance: none;
    ${mq({
      paddingLeft: theme.spacingUnit6,
      paddingRight: theme.spacingUnit6,
      paddingTop: theme.spacingUnit3,
      paddingBottom: theme.spacingUnit3,
      minHeight: theme.spacingUnit1.map(_ => _ * 11),
      borderRadius: theme.spacingUnit1.map(_ => (_ * 11) / 2),
    })}
  `

  return (
    <CTAButton>
      <Text
        inline={true}
        textColor="textColor2"
        textSize="eta"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </CTAButton>
  )
})
