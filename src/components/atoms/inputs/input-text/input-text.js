import React from 'react'
import cx from 'classnames'
import s from './input-text.scss'
import omit from 'lodash.omit'
import withStyles               from 'isomorphic-style-loader/lib/withStyles'

class InputText extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      value: props.value || props.defaultValue
    }
  }

  onChange = (e) => {
    this.setState({value: e.target.value});
    if(this.props.onChange) this.props.onChange(e);
  }

  onFocus = (e) => {
    this.setState({
      focus: true
    })
    if (this.props.onFocus) this.props.onFocus(e);
  }

  onBlur = (e) => {
    this.setState({
      focus: false
    })
    if (this.props.onBlur) this.props.onBlur(e);
  }

  render() {

    const classNames = {
      "input-text" : true,
      "input-text--has-value" : this.state.focus || this.props.value!=='',
      "input-text--has-error" : !this.state.focus && this.props.error,
      "input-text--is-disabled" : this.props.disabled
    }

    const inputProps = omit(this.props, ['placeholder', 'error', 'input', 'meta', 'defaultValue']);
    inputProps.type = this.props.type || "text"
    inputProps.id = `input-text--${this.props.name}`
    if(this.props.error) {
      inputProps['aria-invalid'] = true;
    }

    const inputPartial =  <input
                          {...inputProps}
                          className="input-text__input"
                          onFocus={this.onFocus}
                          onBlur={this.onBlur} />;

    const labelPartial =  (this.props.placeholder)
                        ? <label className="input-text__label" aria-hidden="true" htmlFor={inputProps.id}>{this.props.placeholder}</label>
                        : null

    const errorPartial =  (this.props.error)
                        ? <span className="input-text__error text-size-9" aria-live="polite">{this.props.error}</span>
                        : <span className="input-text__error text-size-9" aria-live="polite"></span>

    return <span className={cx(classNames)}>
              {labelPartial}
              {inputPartial}
              {errorPartial}
            </span>
  }
}

InputText.defaultProps = {
  defaultValue: ''
}

export default withStyles(s)(InputText)
