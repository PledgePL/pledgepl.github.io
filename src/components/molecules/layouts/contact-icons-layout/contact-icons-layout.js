import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './contact-icons-layout.scss'

const ContactIconsLayout = (props) => {
  const children = React.Children
    .map(props.children,
      child =>
        <li className="contact-icons-layout__item">{child}</li>
    )

  return (
    <ul className="contact-icons-layout">
      {children}
    </ul>
  )
}

export default withStyles(s)(ContactIconsLayout)
