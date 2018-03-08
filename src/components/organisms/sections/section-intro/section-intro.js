import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-intro.scss'

const SectionIntro = props => (
  <section className="section-intro">
    <div className="section-intro__content">
      <div className="section-intro__content__body">
        <h1 className="text-size-1">{props.title}</h1>
        <div dangerouslySetInnerHTML={{__html:props.children}} />
      </div>
    </div>
  </section>
  )

export default withStyles(s)(SectionIntro)
