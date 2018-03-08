import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './resource-card.scss'

const ResourceCard = props => (
  <div className="resource-card">
    <div className="resource-card__body">
      {props.children}
    </div>
  </div>
)

export default withStyles(s)(ResourceCard)
