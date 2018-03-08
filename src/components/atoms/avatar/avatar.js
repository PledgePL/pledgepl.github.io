import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './avatar.scss'

const Avatar = (props) => {
  const style = {
    backgroundImage: (props.src) ? `url(${props.src})` : 'none'
  }
  return <span className="avatar" style={style}>{props.alt}</span>
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

Avatar.defaultProps = {
  src: null,
  alt: ''
}

export default withStyles(s)(Avatar)
