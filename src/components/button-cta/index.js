import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { Box } from '@rebass/grid'
import Text from '../text'
import { mq } from '../../styles/theme'

export default withTheme(({ theme, href, children, size = 'large' }) => {
  const isLarge = size === 'large'
  const heightMultiplier = isLarge ? 11 : 8
  const paddingVertical = isLarge ? theme.spacingUnit3 : theme.spacingUnit1
  const paddingHorizontal = isLarge ? theme.spacingUnit6 : theme.spacingUnit5

  const ButtonCTA = styled(Box)`
    background-color: ${theme.bgColor3};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 50%;
    -webkit-appearance: none;
    text-decoration: none;
    text-align: center;
    ${mq({
      letterSpacing: theme.spacingUnit1.map(_ => _ / 6),
      minHeight: theme.spacingUnit1.map(_ => _ * heightMultiplier),
      minWidth: theme.spacingUnit1.map(_ => _ * 20),
      borderRadius: theme.spacingUnit1.map(_ => (_ * heightMultiplier) / 2),
    })}
    &:hover {
      background-color: ${theme.bgColor3Active};
    }
  `

  return (
    <ButtonCTA {...{ href }} pt={1} pb={1} pl={[3, 4]} pr={[3, 4]}>
      <Text
        inline={true}
        color="beta"
        fontSize="eta"
        textSize={isLarge ? 'eta' : 'iota'}
        textTransform="uppercase"
        whiteSpace="nowrap"
      >
        {children}
      </Text>
    </ButtonCTA>
  )
})
