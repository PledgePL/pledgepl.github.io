import React, { PropTypes } from 'react'
import cx from 'classnames'
import omit from 'lodash.omit'
import { Link } from 'react-router'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './cta-button.scss'
import Spinner from '../../spinner/spinner'

const CTAButton = (props) => {
  // make sure this let starts with a capital letter
  const TagName = props.tagName || 'a';

  const classNames = {
    'cta-button': true,
    'cta-button--width-100': (props.width === '100%'),
    'cta-button--width-auto': (props.width !== '100%')
  }

  // size
  if (props.size) classNames[`cta-button--size-${props.size}`] = true

  // modifier
  if (props.modifier) classNames[`cta-button--modifier-${props.modifier}`] = true

  const loadingPartial = (props.loading) ?
    <span className="cta-button__loading">
      <Spinner />
    </span> :
    null

  return (props.to) ?
    <Link
      to={props.to}
      className={cx(classNames)}
      {...omit(props, ['loading', 'modifier'])}
      aria-label={props['aria-label'] || props.children}
      title={props.title}>
      <span className="cta-button__label">{props.children}</span>{loadingPartial}
    </Link> :
      <TagName
        className={cx(classNames)}
        {...omit(props, ['loading', 'modifier'])}
        aria-label={props['aria-label'] || props.children}
        title={props.title}>
        <span className="cta-button__label">{props.children}</span>{loadingPartial}
      </TagName>
}

CTAButton.propTypes = {
  size: PropTypes.oneOf(['extra-small', 'small', 'medium', 'large']),
  width: PropTypes.oneOf(['auto', '100%'])
}

CTAButton.defaultProps = {
  href: '#',
  loading: false,
  title: null
}

export default withStyles(s)(CTAButton)
