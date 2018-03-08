import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './quote-layout.scss'
import TextBlockAvatar from '../../text-blocks/text-block-avatar/text-block-avatar'
import TextBlockQuote from '../../text-blocks/text-block-quote/text-block-quote'

const QuoteLayout = (props) => {
  return (
    <div className="quote-layout'">
      <div className="quote-layout__content">
        <TextBlockQuote
          quoteDirection={props.quoteDirection}
          quoteType={props.quoteType}
          cite={`${props.name}, ${props.title}`}
          citeAria={`${props.name}, ${(props.ariaTitle || props.title)}`}
        >
          {props.quote}
        </TextBlockQuote>
      </div>
      <div
        className="quote-layout__attribution"
        aria-hidden="true"
      >
        <TextBlockAvatar
          name={props.name}
          ariaName={props.name}
          title={props.title}
          ariaTitle={props.ariaTitle || props.title}
          src={props.src}
        />
      </div>
    </div>
  )
}

export default withStyles(s)(QuoteLayout)
