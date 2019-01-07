import React, { Component } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import videoBG from '../../../../static/videos/bg.mp4'
import Youtube from '../../../util/youtube'
import s from './section-hero.scss'
import VideoBG from '../../../atoms/video-bg/video-bg'
import PlayButton from '../../../atoms/buttons/play-button/play-button'
import videoBGPoster from '../../../../static/photos/bg-poster.jpg'

class SectionHero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      video: false,
      videoReady: false
    }
  }

  onPlayClick = () => {
    this.setState({
      video: true
    })
  }

  onVideoEnd = () => {
    this.setState({
      video: false,
      videoReady: false
    })
  }

  onReady = () => {
    this.setState({
      videoReady: true
    })
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        modestbranding: 0
      }
    }

    // STYLES

    const contentVideoStyle = {
      'section-hero__video': true,
      'section-hero__video--ready': this.state.video && this.state.videoReady
    }

    const contentStyle = {
      'section-hero__content': true,
      'section-hero__content--disabled': this.state.video && this.state.videoReady
    }


    // PARTIALS
    const contentPreviewPartial = (
      <div className="section-hero__bg" role="presentation" aria-hidden="true"  >
        <VideoBG
          id="section-hero__bg__video"
          src={videoBG}
          poster={videoBGPoster}
          autoPlay="true"
          loop="true"
          muted="true"
        />
      </div>
    )

    const contentVideoPartial = (
      <div className={cx(contentVideoStyle)}>
        <div className="section-hero__video__content">
          <Youtube
            videoId="wU-OpTFmO1g"
            opts={opts}
            onReady={this.onReady}
            onEnd={this.onVideoEnd}
          />
        </div>
      </div>
    )

    const previewPartial = (
      this.state.video &&
      this.state.videoReady
    ) ? null : contentPreviewPartial

    return (<section className="section-hero">
      {previewPartial}
      {this.state.video && contentVideoPartial}
      <div className={cx(contentStyle)} hidden={this.state.video && this.state.videoReady} aria-hidden={this.state.video && this.state.videoReady}>
        <h1 className="section-hero__content__title xs-text-size-5 sm-text-size-3 md-text-size-xl">Pledge Parental Leave is setting the standard for paid leave benefits in the U.S. creative industry</h1>
        <PlayButton className="section-hero__content__button" onClick={this.onPlayClick} loading={this.state.video} aria-live="assertive">Watch the video</PlayButton>
      </div>
    </section>)
  }
}
export default withStyles(s)(SectionHero)
