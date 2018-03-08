import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-mayor.scss'

const TextBlockMayor = () => (
  <div className="text-block-mayor">
    <h1 className="text-size-1 text-size-1--trailer-0">Bill de Blasio</h1>
    <p className="text-size-7 text-size--trailer-2">Mayor of New York City</p>
  </div>
)

export default withStyles(s)(TextBlockMayor)
