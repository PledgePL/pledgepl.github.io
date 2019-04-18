import React from 'react'
import styled from '@emotion/styled'
import { CoreBox, CoreFlex } from '../core-box'
import Text from '../text'
import VideoBG from '../video-bg'
import ButtonWatch from '../button-watch'
import YoutubeVideo from '../youtube-video'

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
  }
  `,
  props => ({
    '&:after': {
      backgroundColor: `rgba(0, 0, 0, ${
        props.watching && props.ready ? 0 : 0.7
      })`,
      pointerEvents: props.watching ? 'none' : 'auto',
    },
  })
)

class VideoBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watching: false,
      ready: false,
    }
  }

  onWatchClick(e) {
    this.setState({
      watching: true,
      ready: false,
    })
  }

  onPlayerReady(e) {
    this.setState({
      ready: true,
    })
  }

  onPlayerEnded(e) {
    this.setState({
      watching: false,
      ready: false,
    })
  }

  render() {
    const { title, bg, loop } = this.props
    const { watching, ready } = this.state
    return (
      <CoreBox bg="eta" css={{ position: 'relative' }}>
        {bg && (
          <VideoBGContainer
            flexDirection="column"
            justifyContent="center"
            watching={watching}
            ready={ready}
          >
            <VideoBG bg={bg} loop={loop} />
            {watching && (
              <YoutubeVideo
                onPlayerReady={this.onPlayerReady.bind(this)}
                onPlayerEnded={this.onPlayerEnded.bind(this)}
              />
            )}
          </VideoBGContainer>
        )}
        {!watching && (
          <CoreFlex
            css={{
              maxWidth: 750,
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            mx="auto"
            py={[6, 7]}
            px={[6, 5]}
          >
            {title && (
              <Text
                color="beta"
                mb={3}
                fontSize={[16, 26, 30.75, 41.053]}
                lineHeight="1.5"
                fontFamily="beta"
                as="h1"
                textAlign="left"
              >
                {title}
              </Text>
            )}
            <ButtonWatch onClick={this.onWatchClick.bind(this)}>
              Watch The Video
            </ButtonWatch>
          </CoreFlex>
        )}
      </CoreBox>
    )
  }
}

VideoBanner.defaultProps = {
  title: null,
  bg: null,
  loop: null,
}

export default VideoBanner
