import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-avatar.scss'
import Avatar from '../../../atoms/avatar/avatar'

const TextBlockAvatar = (props) => {
  const avatarPartial = (props.src)
                        ? (<div className="text-block-avatar__avatar">
                          <Avatar
                            alt={`Headshot of ${props.name}`}
                            src={props.src}
                          />
                        </div>)
                        : null

  return (
    <div className="text-block-avatar">
      {avatarPartial}
      <div className="text-block-avatar__content">
        <h6
          className="text-block-avatar__content__name text-font--heading text-size-7 text-size-7--trailer-0"
          aria-label={props.ariaName || props.name}
        >
          {props.name}
        </h6>
        <p
          className="text-block-avatar__content__title text-size-9 text-size-9--trailer-0"
          aria-label={props.ariaTitle || props.title}
        >
          {props.title}
        </p>
      </div>
    </div>)
}

TextBlockAvatar.defaultProps = {
  name: '',
  title: '',
  src: null
}

TextBlockAvatar.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string
}

export default withStyles(s)(TextBlockAvatar)
