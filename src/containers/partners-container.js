import React from 'react'
import { connect } from 'react-redux'
import has from 'lodash.has'
import get from 'lodash.get'
import TemplatePartners from '../components/templates/template-partners/template-partners'

const PartnersContainer = props => (<TemplatePartners {...props} />)

const compareAlphabetical = (a, b) => {
  if (get(a, 'fields.name') < get(b, 'fields.name')) {
    return -1
  } else if (get(a, 'fields.name') > get(b, 'fields.name')) {
    return 1
  }
  return 0
}

// Sort partner alpbetically
// map over each partner category and sort the partners field array
const sortPartners = ourPartners => Object.assign({}, ourPartners, {
  fields: {
    ...ourPartners.fields,
    partnerCategories: get(ourPartners, 'fields.partnerCategories', []).map(category =>
      Object.assign({}, category, {
        fields: {
          ...category.fields,
          partners: (get(category, 'fields.orderBy') === 'Alphabetical') ? category.fields.partners.sort(compareAlphabetical) : category.fields.partners
        }
      })
    )
  }
})

const mapStateToProps = state => ({
  ourPartners: state
                .contentful
                .data
                .filter(value => value.sys.contentType.sys.id === 'ourPartners')
                .map(ourPartners => sortPartners(ourPartners)),
  intro: state
          .contentful
          .data
          .filter(value => value.sys.contentType.sys.id === 'intro')
          .find(value => value.fields.page === 'Our Partners'),
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

export default connect(mapStateToProps)(PartnersContainer)
