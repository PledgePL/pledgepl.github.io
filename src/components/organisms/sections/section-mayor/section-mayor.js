import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-mayor.scss'
import TextBlockMayor from '../../../molecules/text-blocks/text-block-mayor/text-block-mayor'
import TextBlockQuoteHero from '../../../molecules/text-blocks/text-block-quote-hero/text-block-quote-hero'

const SectionMayor = () => (
  <section className="section-mayor">
    <div className="section-mayor__content">
      <div className="section-mayor__content__title" aria-hidden="true">
        <TextBlockMayor />
      </div>
      <div className="section-mayor__content__quote">
        <TextBlockQuoteHero cite="Bill de Blasio, Mayor of New York City">
          Too many parents face an impossible choice: Their new child, or their paycheck. Our administration is proud to lead by example by providing fully paid parental leave to City employees. Yet the United States still lags behind the rest of the world in offering this vital, basic benefit. That’s why leadership from businesses like those in the Pledge Parental Leave coalition is vital – and we need others to quickly follow suit.
        </TextBlockQuoteHero>
      </div>
    </div>
  </section>
)

export default withStyles(s)(SectionMayor)
