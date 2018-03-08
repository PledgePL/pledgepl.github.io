import React, { PropTypes } from 'react'
import cx from 'classnames'
import omit from 'lodash.omit'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './hamburger-button.scss'

const HamburgerButton = (props) => {
  const classNames = {
    'hamburger-button': true,
    'hamburger-button--active': props.active
  }
  return (<button className={cx(classNames)} {...omit(props, ['active'])}>
    <span className="hamburger-button__line" />
  </button>)
}

HamburgerButton.propTypes = {
  active: PropTypes.bool
}

HamburgerButton.defaultProps = {
  active: false
}

export default withStyles(s)(HamburgerButton)
