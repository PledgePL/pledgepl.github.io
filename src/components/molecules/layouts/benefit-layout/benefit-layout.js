import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './benefit-layout.scss'
import IconInline from '../../../atoms/icons/icon-inline/icon-inline'

const BenefitLayout = props => (
  <div className="benefit-layout">
    <div className="benefit-layout__icon">
      <IconInline icon={props.icon} />
    </div>
    <div className="benefit-layout__title">
      <h5 className="xs-text-size-5">{props.title}</h5>
    </div>
    <div className="benefit-layout__content">
      <p
        className="xs-text-size-7 xs-text-size-7--trailer-0 md-text-size-7 md-text-size-7--trailer-0 lg-text-size-8 lg-text-size-8--trailer-0 xl-text-size-7 xl-text-size-7--trailer-0"
      >
        {props.children}
      </p>
    </div>
  </div>
)

BenefitLayout.defaultProps = {
  icon: 'lightbuilb'
}

BenefitLayout.propTypes = {
  title: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  children: React.PropTypes.string
}

export default withStyles(s)(BenefitLayout)
