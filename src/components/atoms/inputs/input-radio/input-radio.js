import React from 'react'
import cx from 'classnames'
import omit from 'lodash.omit'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './input-radio.scss'
import IconCheck from '../../icons/icon-check/icon-check'

const InputRadio = (props) => {
  const classNames = {
    'input-radio': true,
    'input-radio--has-error': props.error,
    'input-radio--is-disabled': props.disabled
  }

  const inputProps = omit(props, ['children', 'error', 'input', 'meta'])
  inputProps.type = props.type || 'radio'
  inputProps.id = props.id || `${props.name}_${props.value}`

  const inputPartial = (
    <input
      {...inputProps}
      className="input-radio__input"
    />
  )

  const checkPartial = (
    <span className="input-radio__check" aria-hidden="true">
      <span className="input-radio__check__icon">
        <IconCheck />
      </span>
    </span>
  )

  const labelPartial = (
    <label
      className="text-size-7 text-size-7--trailer-0"
      htmlFor={inputProps.id}
    >
      {props.children}
    </label>
  )

  return <span className={cx(classNames)}>
    {inputPartial}
    {checkPartial}
    {labelPartial}
  </span>
}

export default withStyles(s)(InputRadio)
