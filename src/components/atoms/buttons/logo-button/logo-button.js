import React, { PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Link } from 'react-router'
import s from './logo-button.scss'
import logoWhite from './logo-button--white.png'
import logoPurple from './logo-button--purple.png'

const LogoButton = (props) => {
  const classNames = {
    'logo-button': true
  }
  // color
  if (props.color) classNames[`logo-button--color-${props.color}`] = true
  // size
  if (props.size) classNames[`logo-button--size-${props.size}`] = true

  const imageSrc = (props.color === 'purple') ? logoPurple : logoWhite
  const imagePartial = (<img
    className="logo-button__image"
    src={imageSrc}
                          alt="Pledge Parental Leave" />)

  return (props.to) ?
    <Link
      to={props.to}
      className={cx(classNames)}
    >{imagePartial}</Link> :
      <a
        {...{ href: props.href, target: props.target }}
        className={cx(classNames)}
      >{imagePartial}</a>
}

LogoButton.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.oneOf(['white', 'purple']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

LogoButton.defaultProps = {
  href: '#',
  color: 'white'
}

export default withStyles(s)(LogoButton)
