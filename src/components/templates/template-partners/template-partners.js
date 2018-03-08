import React from 'react'
import get from 'lodash.get'
import marked from 'marked'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './template-partners.scss'
import SectionIntro from '../../organisms/sections/section-intro/section-intro'
import SectionPartners from '../../organisms/sections/section-partners/section-partners'
import SectionJoin from '../../organisms/sections/section-join/section-join'

const TemplatePartners = (props) => {
  const intro = get(props, 'intro.fields', null)
  const partnerCategories = get(props, 'ourPartners[0].fields.partnerCategories', null)
  const employeesCovered = get(props, 'employeesCovered', null)

  return (
    <article className="template-partners">

      {intro && <div className="template-partners__item">
        <SectionIntro title={intro.title}>
          {marked(intro.description)}
        </SectionIntro>
      </div>}

      {partnerCategories &&
        <div className="template-partners__item">
          {partnerCategories.map(category => (
            <SectionPartners key={category.sys.id} {...category.fields} />
          ))}
        </div>
      }

      {employeesCovered && <div className="template-partners__item">
        <SectionJoin numEmployees={employeesCovered} />
      </div>}

    </article>)
}

export default withStyles(s)(TemplatePartners)
