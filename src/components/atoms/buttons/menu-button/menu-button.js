import React, { PropTypes } from 'react'
import cx from 'classnames'
import omit from 'lodash.omit'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Link } from 'react-router'
import s from './menu-button.scss'

const MenuButton = (props) => {
  // make sure this let starts with a capital letter
  const TagName = props.tagName || 'a'

  const classNames = {
    'menu-button': true,
    'menu-button--active': props.active
  }

  const labelPartial = (<span
    className="menu-button__label text-font--heading text-size-7 text-size-7--trailer-0"
  >
    {props.children}
  </span>)

  return (props.to) ?
    <Link
      to={props.to}
      className={cx(classNames)}
      {...omit(props, ['active'])}
    >
      {labelPartial}
    </Link> :
      <TagName
        {...omit(props, ['active'])}
        className={cx(classNames)}
      >
        {labelPartial}
      </TagName>
}

MenuButton.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  tagName: PropTypes.string,
  alt: PropTypes.string
}

MenuButton.defaultProps = {
  href: '#',
  active: false,
  title: ''
}

export default withStyles(s)(MenuButton)
