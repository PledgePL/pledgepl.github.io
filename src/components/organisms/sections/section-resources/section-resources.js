import React from 'react'
import lodashGet from 'lodash.get'
import lodashCastArray from 'lodash.castarray'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-resources.scss'
import TextBlockResource from '../../../molecules/text-blocks/text-block-resource/text-block-resource'
import ResourceCard from '../../../molecules/resource-card/resource-card'
import BlockGrid from '../../../molecules/block-grid/block-grid'


const renderDownloadsPartial = (downloads) => {
  downloads = Array.isArray(downloads) ? downloads : [downloads]

  if (downloads.length === 0) return null

  return  <ul>
            {downloads.map(download => <li><a href={download.fields.file.url} target="_blank" alt={download.fields.description}>{download.fields.description}</a></li>)}
          </ul>

}

const SectionResources = (props) => {
  const title = lodashGet(props.resources, 'fields.title', null)
  const resources = lodashCastArray(props.resources.fields.resources)

  return  <section className="section-resources">

    <div className="section-resources__content">

      {title && <div className="section-resources__content__title">
        <h2 className="text-size-1">{title}</h2>
      </div>}

      {resources && <div className="section-resources__content__body">
        <BlockGrid xsCols={1} smCols={1} mdCols={2} lgCols={3} gutter={1} flex={true}>
          {resources.map(resource => (
            <ResourceCard>
              <TextBlockResource title={resource.fields.title} icon={resource.fields.icon}>
                {resource.fields.description && <p>{resource.fields.description}</p>}
                {renderDownloadsPartial(resource.fields.downloads)}
              </TextBlockResource>
            </ResourceCard>
          ))}
        </BlockGrid>
      </div>}


    </div>

  </section>
}

export default withStyles(s)(SectionResources)
