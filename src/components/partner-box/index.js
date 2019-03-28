import React from 'react'
import hexRgb from 'hex-rgb'
import Img from 'gatsby-image'
import Link from '../../utils/gatsby-link'
import { withTheme } from 'emotion-theming'
import { CoreBox, CoreFlex, CoreGrid } from '../core-box'
import Text from '../text'
import ButtonCTA from '../button-cta'
import AspectRatio from '../aspect-ratio'
import Tile from '../tile'

const PartnerBox = ({ theme, name, url, policyUrl, fluid }) => {
  const backgroundColorRgba = hexRgb(`${theme.colors.gamma}dd`, {
    format: 'array',
  }).toString()

  return (
    <Tile
      padding={false}
      css={{
        position: 'relative',
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
      <Link href={url} target="_blank">
        <CoreBox p={'15%'} as="span" css={{ display: 'block' }}>
          <Img
            fluid={fluid}
            fadeIn={true}
            critical={false}
            alt={name}
            imgStyle={{ objectFit: 'contain' }}
          />
        </CoreBox>
      </Link>
      <CoreBox
        css={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          pointerEvents: 'none',
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
                gridTemplateColumns={[
                  '1fr',
                  url && policyUrl ? '1fr 1fr' : '1fr',
                ]}
                gridGap={[4]}
                css={{ position: 'absolute', bottom: 0 }}
                pb={[3, 2]}
                mx="auto"
              >
                {url && (
                  <ButtonCTA
                    href={url}
                    size="xsmall"
                    type="gamma"
                    mx="auto"
                    css={{ width: '100%', pointerEvents: 'auto' }}
                  >
                    Website
                  </ButtonCTA>
                )}
                {policyUrl && (
                  <ButtonCTA
                    href={policyUrl}
                    size="xsmall"
                    type="gamma"
                    css={{ width: '100%', pointerEvents: 'auto' }}
                    mx="auto"
                  >
                    Policy
                  </ButtonCTA>
                )}
              </CoreGrid>
            </CoreFlex>
          )}
        </AspectRatio>
      </CoreBox>
    </Tile>
  )
}

PartnerBox.defaultProps = {
  name: null,
  src: null,
  url: null,
}

export default withTheme(PartnerBox)
