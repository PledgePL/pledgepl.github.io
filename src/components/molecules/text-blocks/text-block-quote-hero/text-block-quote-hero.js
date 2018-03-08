import React from 'react'
import s from './text-block-quote-hero.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

const TextBlockQuoteHero = props => (
  <div className="text-block-quote-hero">
    <span className="text-block-quote-hero__quote-left">
      <svg viewBox="0 0 111 82.06">
        <path d="M111 30.65q0 22-10.47 34.72c-7 8.5-17.53 14.06-30.53 16.7V66.84c10-3.13 16.69-8.13 20.11-15.75a25.34 25.34 0 0 0 2.24-12.08H69v-39h42v30.65zm-69 0q0 22.26-10.76 34.86T1 82.06V66.83c10-3 16.33-8.13 19.75-16a21.48 21.48 0 0 0 2.17-11.79H0v-39h42v30.65z" />
      </svg>
    </span>
    <blockquote className="text-block-quote-hero__content">
      <p className="text-font--heading text-size-7 text-size-7--trailer-0">{props.children}</p>
      {props.cite && <footer className="u-visually-hidden"><cite>{props.cite}</cite></footer>}
    </blockquote>
    <span className="text-block-quote-hero__quote-right">
      <svg viewBox="0 0 111 82.06">
        <path d="M111 30.65q0 22-10.47 34.72c-7 8.5-17.53 14.06-30.53 16.7V66.84c10-3.13 16.69-8.13 20.11-15.75a25.34 25.34 0 0 0 2.24-12.08H69v-39h42v30.65zm-69 0q0 22.26-10.76 34.86T1 82.06V66.83c10-3 16.33-8.13 19.75-16a21.48 21.48 0 0 0 2.17-11.79H0v-39h42v30.65z" />
      </svg>
    </span>
  </div>
)

export default withStyles(s)(TextBlockQuoteHero)
