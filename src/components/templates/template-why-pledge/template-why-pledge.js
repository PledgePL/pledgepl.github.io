import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import get from 'lodash.get'
import marked from 'marked'
import s from './template-why-pledge.scss'
import SectionIntro from '../../organisms/sections/section-intro/section-intro'
import SectionWhyPledgeTiles from '../../organisms/sections/section-why-pledge-tiles/section-why-pledge-tiles'
import SectionJoin from '../../organisms/sections/section-join/section-join'

const TemplateWhyPledge = (props) => {
  const intro = get(props, 'intro.fields', null)
  const employeesCovered = get(props, 'employeesCovered', null)

  return (
    <article className="template-why-pledge">

      {intro && <div className="template-support__item">
        <SectionIntro title={intro.title}>
          {marked(intro.description)}
        </SectionIntro>
      </div>}

      <div className="template-why-pledge__item">
        <SectionWhyPledgeTiles />
      </div>

      {employeesCovered && <div className="template-partners__item">
        <SectionJoin numEmployees={employeesCovered} />
      </div>}

    </article>
    )
}

export default withStyles(s)(TemplateWhyPledge)
