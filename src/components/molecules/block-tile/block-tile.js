import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './block-tile.scss'

const BlockTile = (props) => {
  const children = React.Children.map(props.children,
    child => <div className="block-tile__content">{child}</div>
  )

  return (
    <div className="block-tile">
      {children}
    </div>
  )
}

BlockTile.propTypes = {
  children: React.PropTypes.any.isRequired
}

export default withStyles(s)(BlockTile)
