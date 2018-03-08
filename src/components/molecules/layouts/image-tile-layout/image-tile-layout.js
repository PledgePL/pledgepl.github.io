import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './image-tile-layout.scss'

const ImageTileLayout = props => (
  <div className="image-tile-layout">
    <img
      {...{ src: props.src, alt: props.alt }}
      role="presentation"
      className="image-tile-layout__image"
    />
  </div>
)

ImageTileLayout.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default withStyles(s)(ImageTileLayout)
