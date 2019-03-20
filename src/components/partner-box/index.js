import React from 'react'
import hexRgb from 'hex-rgb'
import { withTheme } from 'emotion-theming'
import { CoreFlex } from '../core-box'
import Text from '../text'
import AspectRatio from '../aspect-ratio'
import Tile from '../tile'

const PartnerBox = ({ theme, name, src }) => {
  const srcProps = src
    ? {
        backgroundImage: `url(${src})`,
        backgroundSize: '80%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }
    : {}

  const backgroundColorRgba = hexRgb(`${theme.colors.gamma}dd`, {
    format: 'array',
  }).toString()

  return (
    <Tile
      padding={false}
      css={{
        ...srcProps,
        '&:hover': {
          transitionDelay: '0.15s',
        },
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .name': {
          opacity: 1,
        },
      }}
    >
      <AspectRatio
        mx="auto"
        className="overlay"
        css={{
          transitionDelay: '0.15s',
          transitionTimingFunction: 'cubic-bezier(.39,.575,.565,1)',
          transitionProperty: 'opacity',
          transitionDuration: '0.35s',
          backgroundColor: `rgba(${backgroundColorRgba})`,
          opacity: 0,
        }}
      >
        {name && (
          <CoreFlex
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            className="name"
          >
            <Text
              color="beta"
              fontSize="beta"
              fontFamily="beta"
              as="h3"
              textAlign="center"
            >
              {name}
            </Text>
          </CoreFlex>
        )}
      </AspectRatio>
    </Tile>
  )
}

PartnerBox.defaultProps = {
  name: null,
  src: null,
}

export default withTheme(PartnerBox)
