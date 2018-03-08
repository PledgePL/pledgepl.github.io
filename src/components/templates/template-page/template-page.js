import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import SectionFooter from '../../organisms/sections/section-footer/section-footer'
import s from './template-page.scss'

const TemplatePage = props => (
  <div className="template-page">
    <main>{props.children}</main>
    <SectionFooter />
  </div>
)

TemplatePage.propTypes = {
  children: PropTypes.object
}

export default withStyles(s)(TemplatePage)
