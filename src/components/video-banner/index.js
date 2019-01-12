import React from 'react'
import styled from '@emotion/styled'
import { CoreBox, CoreFlex } from '../core-box'
import Text from '../text'
import VideoBG from '../video-bg'

const VideoBGContainer = styled(CoreFlex)(
  ` 
  max-height: 600px;
  overflow: hidden;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }
    `
)

const VideoBanner = ({ title, bg, loop }) => {
  return (
    <CoreBox bg="eta" css={{ position: 'relative' }}>
      {bg && (
        <VideoBGContainer flexDirection="column" justifyContent="center">
          <VideoBG bg={bg} loop={loop} />
        </VideoBGContainer>
      )}
      <CoreFlex
        css={{
          maxWidth: 1000,
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        alignItems="center"
        mx="auto"
        py={[6, 7]}
        px={[4, 5]}
      >
        {title && (
          <Text
            color="beta"
            mb={3}
            fontSize="alpha"
            fontFamily="beta"
            as="h1"
            textAlign="center"
          >
            {title}
          </Text>
        )}
      </CoreFlex>
    </CoreBox>
  )
}

VideoBanner.defaultProps = {
  title: null,
  bg: null,
  loop: null,
}

export default VideoBanner
