import React from 'react'
import { connect } from 'react-redux'
import has from 'lodash.has'
import get from 'lodash.get'
import TemplateHome from '../components/templates/template-home/template-home'

const HomeContainer = props => (<TemplateHome {...props} />)

const reduceToSingleObject = (prev, next) => Object.assign({}, prev, next)

const mapStateToProps = state => ({
  foundingPartners: state
                    .contentful
                    .data
                    .filter(value => value.sys.contentType.sys.id === 'ourPartners')
                    .reduce(reduceToSingleObject, {})
                    .fields
                    .partnerCategories[0],
  employeesCovered: state
                    .contentful
                    .data
                    .filter(
                      value => value.sys.contentType.sys.id === 'partners'
                      && has(value, 'fields.employees')
                      && get(value, 'fields.employees', 0) > 0
                    )
                    .reduce((prev, next) => prev + get(next, 'fields.employees', 0), 0)
})

export default connect(mapStateToProps)(HomeContainer)
