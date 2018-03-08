import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './faq-group-layout.scss'

const FAQGroupLayout = props => (
  <div className="faq-group-layout">
    <div className="faq-group-layout__title">
      <h3 className="xs-text-size-3 xs-text-size-3--trailer-2">
        {props.title}
      </h3>
    </div>
    <div className="faq-group-layout__content">
      {props.children}
    </div>
  </div>
)

FAQGroupLayout.propTypes = {
  children: React.PropTypes.any
}

export default withStyles(s)(FAQGroupLayout)
