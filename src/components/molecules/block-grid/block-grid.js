import React from 'react'
import cx from 'classnames'
import s from './block-grid.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

const BlockGrid = (props) => {
  const ComponentName = props.component || 'div'
  const ChildComponentName = props.childComponent || 'div'

  const classNames = {
    'block-grid': true,
    'no-gutters': false,
    'block-grid--flex': props.flex
  }

  classNames[`xs-block-grid--${props.xsCols}`] = true
  classNames[`sm-block-grid--${props.smCols}`] = (props.smCols) ? true : false
  classNames[`md-block-grid--${props.mdCols}`] = (props.mdCols) ? true : false
  classNames[`lg-block-grid--${props.lgCols}`] = (props.lgCols) ? true : false
  classNames[`block-grid--gutter-${props.gutter}`] = true

  const children = React.Children.map(props.children,
    child => (
      <ChildComponentName className="block-grid__item">
        {child}
      </ChildComponentName>
    ))

  return (
    <ComponentName className={cx(classNames)}>
      {children}
    </ComponentName>
  )
}

BlockGrid.defaultProps = {
  xsCols: 1,
  smCols: 2,
  mdCols: 2,
  lgCols: 2,
  gutter: 2,
  flex: false
}

export default withStyles(s)(BlockGrid)
