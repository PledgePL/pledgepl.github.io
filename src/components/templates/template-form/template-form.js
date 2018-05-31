import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './template-form.scss'
import SectionForm from '../../organisms/sections/section-form/section-form'

const TemplateForm = props => (
  <main className="template-form">
    <iframe
      className="template-form__iframe"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfiXvVAKV7ToEXuapN3YDna8cZEiWqMumV9p_xPFh66vEAELQ/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0">
      Loading...
    </iframe>
    {/* <SectionForm
      onSubmit={props.onFormSubmit}
      onSubmitSuccess={props.onFormSuccess}
      modalOpen={props.modalOpen}
      industryIsOther={props.industryIsOther}
      syncValidationErrors={props.syncValidationErrors}
      onModalAppear={props.onModalAppear} /> */}
  </main>
)

export default withStyles(s)(TemplateForm)
