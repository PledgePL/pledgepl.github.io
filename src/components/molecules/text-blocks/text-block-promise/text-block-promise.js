import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-promise.scss'
import IconInline from '../../../atoms/icons/icon-inline/icon-inline'

const TextBlockPromise = props => (
  <div className="text-block-promise">
    <div className="text-block-promise__icon"><IconInline icon={props.icon} /></div>
    <div className="text-block-promise__copy">
      <div className="text-block-promise__copy__title">
        <h2 className="text-font--heading text-font--bold text-size-5 text-size-5--trailer-0">{props.title}</h2>
      </div>
      <div className="text-block-promise__copy__description">
        <p className="text-size-8 text-size-8--trailer-0">{props.children}</p>
      </div>
    </div>
  </div>
)

TextBlockPromise.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string
}

export default withStyles(s)(TextBlockPromise)
