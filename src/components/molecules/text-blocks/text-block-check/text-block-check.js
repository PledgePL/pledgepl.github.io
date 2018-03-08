import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-check.scss'
import IconCheck from '../../../atoms/icons/icon-check/icon-check'

const TextBlockCheck = props => (
  <div className="text-block-check">
    <div className="text-block-check__icon">
      <IconCheck size="large" background={true} />
    </div>
    <div className="text-block-check__content">
      <h4 className="text-size-4 text-size-4--trailer-0">{props.title}</h4>
      <p className="text-size-7 text-size-7--trailer-0">{props.body}</p>
    </div>
  </div>)

TextBlockCheck.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string
}

export default withStyles(s)(TextBlockCheck)
