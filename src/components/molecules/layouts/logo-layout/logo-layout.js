import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './logo-layout.scss'

const LogoLayout = (props) => {
  const children = React.Children.map(props.children, child =>
    (child !== null) ? <li className="logo-layout__content__item">{child}</li> : null
  )

  return (
    <div className="logo-layout">
      <ul className="logo-layout__content">
        {children}
      </ul>
    </div>
  )
}

export default withStyles(s)(LogoLayout)
