import React from 'react'
import styled from '@emotion/styled'

const Iframe = styled('div')(
  `
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border: 0
`
)

class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props)
    this.player = null
  }

  componentDidMount() {
    // eslint-disable-next-line
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      window.onYouTubeIframeAPIReady = this.startYoutubeVideo.bind(this)
    } else {
      this.startYoutubeVideo()
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy()
    }
  }

  startYoutubeVideo() {
    // eslint-disable-next-line
    this.player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'wU-OpTFmO1g',
      playerVars: {
        autoplay: 1,
        loop: 0,
        controls: 1,
        showinfo: 0,
        autohide: 1,
        modestbranding: 1,
        rel: 0
      },
      events: {
        onReady: this.props.onPlayerReady,
        onStateChange: this.onPlayerStateChange.bind(this),
      },
    })
  }

  onPlayerStateChange(e) {
    // eslint-disable-next-line
    if (e.data == YT.PlayerState.ENDED && this.props.onPlayerEnded) {
      this.props.onPlayerEnded()
    }
  }

  render() {
    return <Iframe id="player" />
  }
}

export default YoutubeVideo
