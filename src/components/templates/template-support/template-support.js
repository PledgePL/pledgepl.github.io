import React from 'react'
import get from 'lodash.get'
import marked from 'marked'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './template-support.scss'
import SectionIntro from '../../organisms/sections/section-intro/section-intro'
import SectionResources from '../../organisms/sections/section-resources/section-resources'
import SectionFAQ from '../../organisms/sections/section-faq/section-faq'
import SectionJoin from '../../organisms/sections/section-join/section-join'

const TemplateSupport = (props) => {
  const intro = get(props, 'intro.fields', null)
  const faq = get(props, 'faq[0].fields', null)
  const resources = get(props, 'resources[0]', null)
  const employeesCovered = get(props, 'employeesCovered', null)

  return (
    <article className="template-support">

      {intro && <div className="template-support__item">
        <SectionIntro title={intro.title}>
          {marked(intro.description)}
        </SectionIntro>
      </div>}

      {resources && <div className="template-support__item">
        <SectionResources resources={resources} />
      </div>}

      {faq && <div className="template-support__item">
        <SectionFAQ faq={faq} />
      </div>}

      {employeesCovered && <div className="template-partners__item">
        <SectionJoin numEmployees={employeesCovered} />
      </div>}

    </article>
  )
}

export default withStyles(s)(TemplateSupport)
