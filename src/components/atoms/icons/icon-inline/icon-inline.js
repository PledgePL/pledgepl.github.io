import React, { PropTypes } from 'react'
import s from './icon-inline.scss'
import cx from 'classnames'
import withStyles               from 'isomorphic-style-loader/lib/withStyles'

const IconInline = (props) => {
  const classNames = {
    'icon-inline': true
  }

  // icon
  if (props.icon) {
    classNames[`icon-inline--${props.icon}`] = true
  }

  return (
    <span
      {...{ href: props.href, target: props.target }}
      className={cx(classNames)}
    >&nbsp;</span>)
}

IconInline.propTypes = {
  icon: PropTypes.oneOf(['lightbulb', 'building', 'people', 'template', 'graph', 'briefcase', 'money', 'shield', 'eye', 'paper', 'stack'])
}

IconInline.defaultProps = {
  href: null,
  icon: 'lightbulb'
}

export default withStyles(s)(IconInline)
