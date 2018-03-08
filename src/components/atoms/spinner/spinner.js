import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import get from 'lodash.get'
import s from './spinner.scss'

const Spinner = (props) => {
  const classNames = {
    spinner: true
  }
  if (get(props, 'size')) classNames[`spinner--size-${props.size}`] = true

  const w = (get(props, 'size') === 'large') ? 51.48 : 30
  const h = (get(props, 'size') === 'large') ? 51.48 : 30

  return (
    <span className={cx(classNames)}>
      <svg viewBox={`0 0 ${w} ${h}`}>
        <circle
          cx={w / 2} cy={h / 2} r={(w / 2) - 3}
          fill="none"
          strokeWidth="3"
          className="spinner__outline"
        />
      </svg>
    </span>
  )
}

Spinner.defaultProps = {
  size: null
}

Spinner.propTypes = {
  size: React.PropTypes.oneOf(['large'])
}

export default withStyles(s)(Spinner)
