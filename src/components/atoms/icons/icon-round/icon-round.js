import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './icon-round.scss'

class IconRound = (props) => {
  const classNames = {
    "icon-round": true
  }

  // size
  if(this.props.icon) {
    classNames[`icon-round--${this.props.icon}`] = true
  }

  return <span className={cx(classNames)}>{this.props.children}</span>
}

IconRound.propTypes = {
  icon: React.PropTypes.oneOf(['logo', 'megaphone', 'envelope', 'chart', 'download'])
}

IconRound.defaultProps = {
  icon: 'logo'
}

export default withStyles(s)(IconRound)
