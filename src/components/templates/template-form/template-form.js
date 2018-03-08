import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './template-form.scss'
import SectionForm from '../../organisms/sections/section-form/section-form'

const TemplateForm = props => (
  <main className="template-form">
    <SectionForm
      onSubmit={props.onFormSubmit}
      onSubmitSuccess={props.onFormSuccess}
      modalOpen={props.modalOpen}
      industryIsOther={props.industryIsOther}
      syncValidationErrors={props.syncValidationErrors}
      onModalAppear={props.onModalAppear} />
  </main>
)

export default withStyles(s)(TemplateForm)
