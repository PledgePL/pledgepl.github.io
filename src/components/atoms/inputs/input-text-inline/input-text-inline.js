import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './input-text-inline.scss'
import omit from 'lodash.omit'

class InputTextInline extends React.Component {

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

    let classNames = {
      "input-text-inline" : true,
      "input-text-inline--has-value" : this.state.focus || this.props.value!=='',
      "input-text-inline--has-error" : !this.state.focus && this.props.error,
      "input-text-inline--is-disabled" : this.props.disabled
    }

    const inputProps = omit(this.props, ['error']);
    inputProps.type = this.props.type || "text"

    const inputPartial =  <input
                          {...inputProps}
                          className="input-text-inline__input"
                          onFocus={this.onFocus}
                          onBlur={this.onBlur} />;

    const errorPartial =  (this.props.error)
                        ? <span className="input-text-inline__error text-size-9">{this.props.error}</span>
                        : null;

    return <span className={cx(classNames)}>
      {inputPartial}
      {errorPartial}
    </span>
  }
}

InputTextInline.defaultProps = {
  defaultValue: ''
}

export default withStyles(s)(InputTextInline)
