import React from 'react'
import TemplatePage from '../components/templates/template-page/template-page'

const PageContainer = props => (
  <TemplatePage
    {...props}
  >
    {props.children}
  </TemplatePage>
)

export default PageContainer
