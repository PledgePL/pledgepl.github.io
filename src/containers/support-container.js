import React from 'react'
import { connect } from 'react-redux'
import has from 'lodash.has'
import get from 'lodash.get'
import TemplateSupport from '../components/templates/template-support/template-support'

const SupportContainer = props => (<TemplateSupport {...props} />)

const mapStateToProps = (state) => {
  return {
    faq:              state
                      .contentful
                      .data
                      .filter(value => value.sys.contentType.sys.id==="faq-page"),
    resources:        state
                      .contentful
                      .data
                      .filter(value => value.sys.contentType.sys.id==="resources"),
    intro:            state
                      .contentful
                      .data
                      .filter(value => value.sys.contentType.sys.id==="intro")
                      .find(value => value.fields.page==="Support"),
    employeesCovered: state
                      .contentful
                      .data
                      .filter(
                        value => value.sys.contentType.sys.id === 'partners'
                        && has(value, 'fields.employees')
                        && get(value, 'fields.employees', 0) > 0
                      )
                      .reduce((prev, next) => prev + get(next, 'fields.employees', 0), 0)
  }
}

export default connect(mapStateToProps)(SupportContainer)
