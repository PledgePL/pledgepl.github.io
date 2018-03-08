import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import cx from 'classnames'
import s from './why-tile.scss'
import BlockTile from '../../../molecules/block-tile/block-tile'

const WhyTile = (props) => {
  const classNames = {
    'why-tile': true
  }

  // type
  if (props.type) {
    classNames[`why-tile--${props.type}`] = true
  }

  // padding
  if (props.padding !== undefined) {
    classNames[`why-tile--padding-${props.padding}`] = true
  }

  return (
    <BlockTile>
      <div className={cx(classNames)}>
        <div className="why-tile__content">
          {props.children}
        </div>
      </div>
    </BlockTile>
  )
}

WhyTile.propTypes = {
  type: PropTypes.oneOf(['alpha', 'beta', 'gamma']),
  padding: PropTypes.number
}

export default withStyles(s)(WhyTile)
