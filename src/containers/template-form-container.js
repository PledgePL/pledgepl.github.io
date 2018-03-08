import React from 'react'
import get from 'lodash.get'
import {connect} from 'react-redux'
import { submitForm, modalRemoveTimeout } from '../actions/form'
import serialize from 'form-serialize'
import {startSubmit, stopSubmit, formValueSelector} from 'redux-form';
import TemplateForm from '../components/templates/template-form/template-form'

const TemplateFormContainer = props => (<TemplateForm {...props} />)

const mapStateToProps = (state) => {
  const selector = formValueSelector('join-us') // <-- same as form name
  const industryIsOther = selector(state, 'INDUSTRY') === 'Other'
  const syncValidationErrors = get(state, 'form.join-us.syncErrors', null)
  return {
    modalOpen: state.ui.formModalOpen,
    industryIsOther,
    syncValidationErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (values) => {
      dispatch(startSubmit('join-us'))
      dispatch(submitForm(values))
    },
    onModalAppear: () => {
      dispatch(modalRemoveTimeout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateFormContainer)
