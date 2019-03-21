import React from 'react'
import hexRgb from 'hex-rgb'
import { withTheme } from 'emotion-theming'
import { CoreBox, CoreFlex, CoreGrid } from '../core-box'
import Text from '../text'
import ButtonCTA from '../button-cta'
import AspectRatio from '../aspect-ratio'
import Tile from '../tile'

const PartnerBox = ({ theme, name, url, policyUrl, src }) => {
  const srcCss = src
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
      as="a"
      href={url}
      padding={false}
      css={{
        ...srcCss,
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
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            width="100%"
            height="100%"
            className="name"
            css={{ position: 'relative' }}
          >
            <CoreFlex flex="1 1 100%" alignItems="center">
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
            <CoreGrid
              gridTemplateColumns={['1fr', '1fr 1fr']}
              gridGap={[4]}
              css={{ position: 'absolute', bottom: 0 }}
              pb={[3, 2]}
              mx="auto"
            >
              {url && (
                <CoreFlex>
                  <ButtonCTA href={url} size="xsmall" type="gamma" mx="auto">
                    Website
                  </ButtonCTA>
                </CoreFlex>
              )}
              {policyUrl && (
                <CoreFlex>
                  <ButtonCTA
                    href={policyUrl}
                    size="xsmall"
                    type="gamma"
                    mx="auto"
                  >
                    Policy
                  </ButtonCTA>
                </CoreFlex>
              )}
            </CoreGrid>
          </CoreFlex>
        )}
      </AspectRatio>
    </Tile>
  )
}

PartnerBox.defaultProps = {
  name: null,
  src: null,
  url: null,
}

export default withTheme(PartnerBox)
