import { createAction } from 'redux-actions'

import {
  CONTENTFUL_API_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DOMAIN_PROD,
  CONTENTFUL_DOMAIN_PREVIEW,
  contentfulGenerateURI
} from '../config'

const fetch = (typeof window !== 'undefined') ? window.fetch : require('isomorphic-fetch')

//-----------------------------------------------


const fetchPartnersPromise = (preview, accessToken, spaceId) => {
  const target = (preview) ? CONTENTFUL_DOMAIN_PREVIEW : CONTENTFUL_DOMAIN_PROD
  const uri = contentfulGenerateURI(
    target,
    (spaceId || CONTENTFUL_SPACE_ID),
    (accessToken || CONTENTFUL_API_TOKEN)
  )
  const fetchOptions = {
    credentials: 'omit'
  }

  console.log('FETCH URI:')
  console.log(uri)

  return fetch(uri, fetchOptions)
    .then((response) => {
      if (response.status >= 400) throw new Error('Bad response from server')
      return response.json()
    })
    .catch((e) => {
      throw new Error(e)
    })
}

// We have to use this function to merge the changed json snipped from the
// contentful webhook into the retreived contentful data from the api call
const mergeBodyWithResult = (result, body = null) => Object.assign({}, result, {
  items: result.items.map(item => ((body !== null && item.sys.id === body.sys.id) ? body : item))
})

export const fetchThing = createAction('FETCH_THING',
  (preview = false,
    accessToken = null,
    spaceId = null,
    body = null) =>
    fetchPartnersPromise(preview, accessToken, spaceId)
      .then(result => mergeBodyWithResult(result, body)))
