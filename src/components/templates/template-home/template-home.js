import React from 'react'
import get from 'lodash.get'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './template-home.scss'
import SectionHero from '../../organisms/sections/section-hero/section-hero'
import SectionFoundingPartners from '../../organisms/sections/section-founding-partners/section-founding-partners'
import SectionRequirements from '../../organisms/sections/section-requirements/section-requirements'
import SectionJoin from '../../organisms/sections/section-join/section-join'
import SectionMayor from '../../organisms/sections/section-mayor/section-mayor'

const TemplateHome = (props) => {
  const employeesCovered = get(props, 'employeesCovered', null)
  const foundingPartners = get(props, 'foundingPartners', null)

  return (<div className="template-home">

    <div className="template-home__item">
      <SectionHero />
    </div>

    <div className="template-home__item">
      <SectionRequirements />
    </div>

    <div className="template-home__item">
      <SectionMayor />
    </div>

    {foundingPartners && <div className="template-home__item">
      <SectionFoundingPartners
        title={`Meet our ${foundingPartners.fields.name.toLowerCase()}`}
        partners={foundingPartners.fields.partners}
      />
    </div>}

    {employeesCovered && <div className="template-partners__item">
      <SectionJoin numEmployees={employeesCovered} />
    </div>}

  </div>)
}

export default withStyles(s)(TemplateHome)
