import React from 'react'
import s from './play-button.scss'
import withStyles               from 'isomorphic-style-loader/lib/withStyles'
import cx from 'classnames'
import omit from 'lodash.omit'
import Spinner from '../../spinner/spinner'

class PlayButton extends React.Component {
  render() {

    let playButtonPartial = <span className="play-button__icon">
                              <svg viewBox="0 0 51.48 51.48">
                                <g>
                                  <g>
                                    <circle cx="25.74" cy="25.74" r="22.74" strokeDasharray="100" fill="none" strokeWidth="3" className="play-button__icon__outline">
                                    </circle>
                                    <path className="play-button__icon__triangle" d="M20.9,35.8 C20.4260851,35.8014742 19.9602544,35.6772527 19.55,35.44 C18.6305253,34.866833 18.0915555,33.8424081 18.14,32.76 L18.14,18.76 C18.0554724,17.6691565 18.6050922,16.6267617 19.5529398,16.080255 C20.5007874,15.5337483 21.6782844,15.5803279 22.58,16.2 L34.73,23.2 C35.7200072,23.6705602 36.3508302,24.6688517 36.3508302,25.765 C36.3508302,26.8611483 35.7200072,27.8594398 34.73,28.33 L22.58,35.33 C22.0711466,35.6318452 21.491613,35.7939766 20.9,35.8 L20.9,35.8 Z M21.74,19.8 L21.74,31.64 L31.95,25.75 L21.74,19.8 Z"></path>
                                    <path className="play-button__icon__triangle play-button__icon__triangle--filled" d="M20.9,35.8 C20.4260851,35.8014742 19.9602544,35.6772527 19.55,35.44 C18.6305253,34.866833 18.0915555,33.8424081 18.14,32.76 L18.14,18.76 C18.0554724,17.6691565 18.6050922,16.6267617 19.5529398,16.080255 C20.5007874,15.5337483 21.6782844,15.5803279 22.58,16.2 L34.73,23.2 C35.7200072,23.6705602 36.3508302,24.6688517 36.3508302,25.765 C36.3508302,26.8611483 35.7200072,27.8594398 34.73,28.33 L22.58,35.33 C22.0711466,35.6318452 21.491613,35.7939766 20.9,35.8 L20.9,35.8 Z"></path>
                                  </g>
                                </g>
                              </svg>
                            </span>

    let spinnerPartial = <span className="play-button__spinner"><Spinner size="large" /></span>

    let labelPartial = <span className="play-button__label"><span className="text-size-7 text-size-7--trailer-0 text-util--transform-uppercase">{this.props.children}</span></span>;

    let loadingLabelPartial = <span className="play-button__label"><span className="text-size-7 text-size-7--trailer-0 text-util--transform-uppercase">Loading</span></span>;


    let classNames = {};
    if(this.props.className) classNames[this.props.className] = true;
    classNames["play-button"] = true;
    classNames["play-button--loading"] = this.props.loading;

    return (
      <button
        {...omit(this.props, ['loading'])}
        className={cx(classNames)}
      >
        {(this.props.loading ? spinnerPartial : playButtonPartial)}{(this.props.loading ? loadingLabelPartial : labelPartial)}
      </button>
    )
  }
}

PlayButton.propTypes = {}

PlayButton.defaultProps = {
  loading: false
}

export default withStyles(s)(PlayButton)
