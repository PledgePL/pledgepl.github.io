import React from 'react'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import { mq } from '../../styles/theme'

const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default withTheme(
  ({
    theme,
    tagName = 'span',
    textSize = 'alpha',
    textColor = 'textColor1',
    textTransform = 'none',
    inline = false,
    children,
  }) => {
    const fontSize = theme[`textSize${capitalizeFirstLetter(textSize)}`]
    const lineHeight = theme[`lineHeight${capitalizeFirstLetter(textSize)}`]

    const Text = styled(tagName)`
      ${mq({
        color: theme[textColor],
        textTransform,
        '&, & p': {
          fontSize,
          lineHeight,
          margin: `0 0 ${inline ? 0 : '1rem'} 0`,
          fontWeight: 'normal',
        },
      })}
    `

    return <Text>{children}</Text>
  }
)
