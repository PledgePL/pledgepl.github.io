import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './partner-button.scss'
import CTAButton from '../cta-button/cta-button'


let partnerButtonRef = null
const resetScroll = () => {
  if (partnerButtonRef) partnerButtonRef.scrollTop = 0
}
const PartnerButton = (props) => {
  return (
    <div
      className="partner-button"
      ref={(ref) => {
        partnerButtonRef = ref
        return
      }}
    >
      <div className="partner-button__container">
        <span
          className="partner-button__content"
          aria-label={`Partner: ${props.alt}`}
        >
          {props.src && <span
            className="partner-button__content__image"
            style={{ backgroundImage: `url(${props.src})` }}
          />}
        </span>
        <span className="partner-button__overlay">
          <span className="partner-button__overlay__alt">
            <h3 className="text-size-3" aria-hidden="true">{props.alt}</h3>
          </span>
          <span className="partner-button__overlay__links">
            <CTAButton
              size="extra-small"
              modifier="beta"
              onFocus={resetScroll}
              onBlur={resetScroll}
              {...{
                href: props.url,
                target: props.target,
                title: `${props.alt}'s website`,
              'aria-label': `${props.alt}'s website` }  }
            >
              Website
            </CTAButton>
            {props.policyUrl &&
              <CTAButton
                size="extra-small"
                modifier="beta"
                onFocus={resetScroll}
                onBlur={resetScroll}
                {...{
                  href: props.policyUrl,
                  target: props.target,
                  title: `${props.alt}'s parental leave policy`,
                  'aria-label': `${props.alt}'s parental leave policy`} }
              >
                Policy
              </CTAButton>}
          </span>
        </span>
      </div>
    </div>
  )
}

PartnerButton.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string
}

PartnerButton.defaultProps = {
  url: '#',
  alt: ''
}

export default withStyles(s)(PartnerButton)
