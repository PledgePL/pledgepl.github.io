import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import AspectRatio from '../aspect-ratio'

const Video = styled('video')(
  `
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
    `
)

const BgImg = styled(Img)(
  `
    width: 100%;
    `
)

class VideoBG extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    const { mounted } = this.state
    const { bg, loop } = this.props
    return (
      <AspectRatio ratio={9 / 16}>
        {bg && (
          <BgImg
            fluid={bg}
            fadeIn={false}
            critical={true}
            style={{
              maxHeight: '100%',
            }}
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'center center',
            }}
          />
        )}
        {loop && mounted && <Video src={loop} autoPlay muted loop />}
      </AspectRatio>
    )
  }
}

VideoBG.defaultProps = {
  bg: null,
  loop: null,
}

export default VideoBG
