import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import omit from 'lodash.omit'
import { Link } from 'react-router'
import s from './fieldset.scss'

const Fieldset = (props) => {
  const classNames = {
    fieldset: true,
    'fieldset--has-error': props.error
  }

  const children = React.Children.map(props.children, child =>
    (<div className="fieldset__body__item">{child}</div>)
  )

  const errorPartial = (
    <span
      className="fieldset__legend__error text-size-9 text-font--body"
      aria-hidden={!Boolean(props.error)}
      aria-live="polite"
    >
      { props.error || <span>&nbsp;</span> }
    </span>
  )

  const descriptionPartial = (
    <Link
      to={ props.descriptionTo || null }
      className="fieldset__legend__description text-size-9 text-font--body text-style--italic"
    >
      { props.description }
    </Link>
  )

  return (
    <fieldset
      className={cx(classNames)}
      {...omit(props, ['children', 'className', 'legend'])}
    >
      <legend
        className="fieldset__legend text-size-4 text-size-4--trailer-1 text-font--heading"
      >
        { props.legend }
        { props.description ? descriptionPartial : null }
        { errorPartial }
      </legend>
      <div className="fieldset__body">
        {children}
      </div>
    </fieldset>)
}

export default withStyles(s)(Fieldset)
