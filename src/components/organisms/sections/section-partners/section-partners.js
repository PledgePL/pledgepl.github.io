import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import get from 'lodash.get'
import s from './section-partners.scss'
import PartnerButton from '../../../atoms/buttons/partner-button/partner-button'
import BlockGrid from '../../../molecules/block-grid/block-grid'

const SectionPartners = (props) => {
  const partners = (Array.isArray(props.partners) || !props.partners)
    ? props.partners
    : [props.partners]

  return (
    <section className="section-partners">

      <div className="section-partners__content">

        <div className="section-partners__content__title">
          <h2 className="text-size-1 text-size-1--trailer-0">{props.name}</h2>
          {props.description && <p>{props.description}</p>}
        </div>

        <div className="section-partners__content__body">

          <BlockGrid xsCols={2} smCols={2} mdCols={3} lgCols={4} gutter={1} component="ul" childComponent="li">
            {partners && partners.map(partner =>
              (
                <PartnerButton
                  key={partner.sys.id}
                  alt={get(partner, 'fields.name')}
                  url={get(partner, 'fields.url')}
                  policyUrl={get(partner, 'fields.policyUrl')}
                  src={get(partner, 'fields.logo.fields.file.url')}
                />
              )
            )}
          </BlockGrid>

        </div>

      </div>

    </section>)
}

SectionPartners.propTypes = {
  partners: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string
}

export default withStyles(s)(SectionPartners)
