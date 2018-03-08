import React, { PropTypes } from 'react'
import get from 'lodash.get'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-founding-partners.scss'
import LogoLayout from '../../../molecules/layouts/logo-layout/logo-layout'
import CTAButton from '../../../atoms/buttons/cta-button/cta-button'

const SectionFoundingPartners = (props) => {
  const {
    title,
    partners
  } = props
  return (<section className="section-founding-partners">
    <div className="section-founding-partners__content">

      {title && <div className="section-founding-partners__content__title">
        <h1 className="text-size-1">{title}</h1>
      </div>}

      { partners && <div className="section-founding-partners__content__grid">
        <LogoLayout>
          {partners.map((partner) => {
            const src = get(partner, 'fields.logo.fields.file.url', null)
            if (!src) return null
            return (<a
              key={partner.sys.id}
              href={partner.fields.url}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img src={src} alt={partner.fields.name} />
            </a>)
          })}
        </LogoLayout>
      </div>}

      <div className="section-founding-partners__content__cta">
        <CTAButton size="large" to="/partners/">View all our partners</CTAButton>
      </div>

    </div>
  </section>)
}

SectionFoundingPartners.propTypes = {
  title: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(PropTypes.object)
}

export default withStyles(s)(SectionFoundingPartners)
