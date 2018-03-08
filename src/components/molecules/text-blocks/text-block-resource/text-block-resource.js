import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-resource.scss'
import IconInline from '../../../atoms/icons/icon-inline/icon-inline'

const TextBlockResource = props => (
  <div className="text-block-resource">
    <div className="text-block-resource__icon"><IconInline icon={props.icon} /></div>
    <div className="text-block-resource__title">
      <h3 className="text-size-5">{props.title}</h3>
    </div>
    <div className="text-block-resource__body">
      {props.children}
    </div>
  </div>
)

TextBlockResource.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string
}

export default withStyles(s)(TextBlockResource)
