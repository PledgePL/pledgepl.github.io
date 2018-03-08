import React, { PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './accordian-button.scss'

const AccordianButton = (props) => {
  const classNames = {
    'accordian-button': true,
    'accordian-button--active': props.active
  }

  return (<span className={cx(classNames)} {...props}>
    <h4 className="text-size-5 text-font--body text-size-5--trailer-0">{props.children}</h4>
  </span>)
}

AccordianButton.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool
}

AccordianButton.defaultProps = {
  active: false
}

export default withStyles(s)(AccordianButton)
