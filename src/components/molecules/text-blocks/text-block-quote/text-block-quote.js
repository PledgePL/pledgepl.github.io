import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import cx from 'classnames'
import s from './text-block-quote.scss'

const TextBlockQuote = (props) => {
  const classNames = {
    'text-block-quote': true,
    'text-block-quote--quote-left': props.quoteDirection === 'left',
    'text-block-quote--quote-right': props.quoteDirection === 'right'
  }

  if (props.quoteType) {
    classNames[`text-block-quote--quote-${props.quoteType}`] = true
  }

  return (
    <div className={cx(classNames)}>
      <span className="text-block-quote__quote">
        <svg viewBox="0 0 111 82.06">
          <path d="M111 30.65q0 22-10.47 34.72c-7 8.5-17.53 14.06-30.53 16.7V66.84c10-3.13 16.69-8.13 20.11-15.75a25.34 25.34 0 0 0 2.24-12.08H69v-39h42v30.65zm-69 0q0 22.26-10.76 34.86T1 82.06V66.83c10-3 16.33-8.13 19.75-16a21.48 21.48 0 0 0 2.17-11.79H0v-39h42v30.65z" />
        </svg>
      </span>
      <blockquote className="text-block-quote__content">
        <p
          className="text-font--heading xs-text-size-7 xs-text-size-7--trailer-0 md-text-size-7 md-text-size-7--trailer-0 lg-text-size-8 lg-text-size-8--trailer-0 xl-text-size-7 xl-text-size-7--trailer-0"
        >
          {props.children}
        </p>
        {props.cite && <footer className="u-visually-hidden"><cite className="u-visually-hidden" aria-label={props.citeAria || props.cite}>{props.cite}</cite></footer>}
      </blockquote>
    </div>
  )
}

TextBlockQuote.defaultProps = {
  quoteDirection: 'left',
  quoteType: null,
  cite: null,
  citeAria: null
}

TextBlockQuote.propTypes = {
  quoteDirection: React.PropTypes.oneOf(['left', 'right']),
  quoteType: React.PropTypes.oneOf(['alpha', 'beta', 'gamma']),
  cite: PropTypes.string,
  citeAria: PropTypes.string
}

export default withStyles(s)(TextBlockQuote)
