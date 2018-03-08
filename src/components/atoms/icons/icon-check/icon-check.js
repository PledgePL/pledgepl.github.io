import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './icon-check.scss'

const IconCheck = (props) => {
  const classNames = {
    'icon-check': true
  }

  // background
  if (props.background) {
    classNames['icon-check--has-background'] = props.background
  }

  // size
  if (props.size) {
    classNames[`icon-check--size-${props.size}`] = true
  }

  return (
    <span className={cx(classNames)}>
      <span className="icon-check__content" />
    </span>
  )
}

IconCheck.defaultProps = {
  background: false,
  size: 'small'
}

IconCheck.propTypes = {
  background: React.PropTypes.bool,
  size: React.PropTypes.oneOf([
    'small',
    'large'
  ])
}

export default withStyles(s)(IconCheck)
