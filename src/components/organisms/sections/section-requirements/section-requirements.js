import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-requirements.scss'
import BlockGrid from '../../../molecules/block-grid/block-grid'
import TextBlockPromise from '../../../molecules/text-blocks/text-block-promise/text-block-promise'

const SectionRequirements = () => (
  <section className="section-requirements">
    <div className="section-requirements__content">

      <div className="section-requirements__content__title">
        <h1 className="text-size-1 sm-text-size-2 xs-text-size-3">Four simple promises, one monumental statement</h1>
      </div>

      <div className="section-requirements__content__grid">

        <BlockGrid xsCols={1} smCols={1} mdCols={2} lgCols={4} gutter={1} component="ul" childComponent="li">
          <TextBlockPromise title="3 Months Paid Leave" icon="money">Fully paid leave for the primary caregiver</TextBlockPromise>
          <TextBlockPromise title="3 Months Medical Coverage" icon="shield">Uninterrupted medical insurance coverage</TextBlockPromise>
          <TextBlockPromise title="6 Months Job Security" icon="briefcase">Return to the same or similar role, guaranteed</TextBlockPromise>
          <TextBlockPromise title="Open Policy" icon="eye">Commitment to making the policy openly available online</TextBlockPromise>
        </BlockGrid>

      </div>

    </div>
  </section>
)

export default withStyles(s)(SectionRequirements)
