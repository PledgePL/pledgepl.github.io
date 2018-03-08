import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './nav-button.scss'

const NavButton = (props) => {
  return (props.to) ?
    <Link
      to={props.to}
      className="nav-button"
    >{props.children}</Link> :
      <a
        {...{ href: props.href, target: props.target }}
        className="nav-button"
      >{props.children}</a>
}

NavButton.defaultProps = {
  href: '#'
}

NavButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string
}

export default withStyles(s)(NavButton)
