import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@rebass/grid'
import { fontFamily } from 'styled-system'

const CustomBox = styled(Box)(fontFamily, props => ({
  textTransform: props.textTransform,
  whiteSpace: props.whiteSpace,
}))

export const Text = props => <CustomBox {...props} />

Text.defaultProps = {
  as: 'div',
  fontFamily: 'alpha',
  textTransform: null,
  whiteSpace: null,
  color: 'alpha',
}

export default Text

// export default withTheme(
//   ({
//     theme,
//     tagName = 'span',
//     textSize = 'alpha',
//     textColor = 'textColor1',
//     textTransform = 'none',
//     fontFamily = 'primary',
//     whiteSpace = 'normal',
//     inline = false,
//     children,
//   }) => {
//     fontFamily = theme[`fontFamily${capitalizeFirstLetter(fontFamily)}`]
//     const fontWeight = theme[`fontWeight${capitalizeFirstLetter(fontFamily)}`]
//     const fontSize = theme[`textSize${capitalizeFirstLetter(textSize)}`]
//     const lineHeight = theme[`lineHeight${capitalizeFirstLetter(textSize)}`]

//     const Text = styled(tagName)`
//       ${mq({
//         color: theme[textColor],
//         textTransform,
//         '&, & p': {
//           fontFamily,
//           fontWeight,
//           fontSize,
//           lineHeight,
//           whiteSpace,
//           margin: `0 0 ${inline ? 0 : '1rem'} 0`,
//           fontWeight: 'normal',
//         },
//       })}
//     `

//     return <Box>{children}</Box>
//   }
// )
