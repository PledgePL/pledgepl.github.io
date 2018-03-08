import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './video-bg.scss'
import device from '../../util/device'

class VideoBG extends Component {

  constructor(props) {
    super(props)
    this.state = {
      canAutoPlay: false
    }
  }

  componentDidMount() {
    this.setState({
      canAutoPlay: typeof (document.createElement('video').playsInline) === 'boolean' ? true : !device.anyMobile()
    })
  }

  render() {
    const style = {
      backgroundImage: (this.props.poster) ? `url(${this.props.poster})` : 'none'
    }

    return (
      <div className="video-bg" style={style}>
        {
          this.state.canAutoPlay &&
            <video
              className="video-bg__video"
              {...this.props}
              autoPlay="autoplay"
              muted="muted"
              playsInline
            />
        }
      </div>
    )
  }
}

VideoBG.propTypes = {
  src: PropTypes.string,
  poster: PropTypes.string
}

VideoBG.defaultProps = {
  src: null
}

export default withStyles(s)(VideoBG)
