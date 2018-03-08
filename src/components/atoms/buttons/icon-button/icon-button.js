import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './icon-button.scss'

const IconButton = (props) => {
  const classNames = {
    'icon-button': true
  }

  // type
  if (props.type) {
    classNames[`icon-button--type-${props.type}`] = true
  }

  return (props.to) ?
    <Link
      to={props.to}
      className={cx(classNames)}
    >{props.children}</Link> :
      <a
        {...{ href: props.href, target: props.target }}
        className={cx(classNames)}
      >{props.children}</a>
}

IconButton.defaultProps = {
  href: '#'
}

IconButton.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf([
    'twitter',
    'linkedin',
    'email'
  ])
}

export default withStyles(s)(IconButton)
