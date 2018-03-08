import React from 'react'
import { connect } from 'react-redux'
import has from 'lodash.has'
import get from 'lodash.get'
import TemplateWhyPledge from '../components/templates/template-why-pledge/template-why-pledge'

const WhyPledgeContainer = props => (<TemplateWhyPledge {...props} />)

const mapStateToProps = state => ({
  intro: state
          .contentful
          .data
          .filter(value => value.sys.contentType.sys.id === 'intro')
          .find(value => value.fields.page === 'Why Pledge'),
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

export default connect(mapStateToProps)(WhyPledgeContainer)
