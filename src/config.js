export const CONTENTFUL_API_TOKEN = process.env.CONTENTFUL_API_TOKEN || '6486596108683d2e164990e478ca0cc046e612ccd07e63ae1bdeee1db06f6c73'
export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || 'rdbmg1jkqyph'
export const CONTENTFUL_DOMAIN_PROD = 'cdn.contentful.com'
export const CONTENTFUL_DOMAIN_PREVIEW = 'preview.contentful.com'

export const contentfulGenerateURI = (domain, spaceId, accessToken) => `//${domain}/spaces/${spaceId}/entries?access_token=${accessToken}`

export const MAILCHIMP_URI = '//ustwo.us10.list-manage.com/subscribe/post-json'
export const MAILCHIMP_USER = '7f1269c0305abed7c91a24b97'
export const MAILCHIMP_ID = '5334504188'

export const BREAKPOINTS = {
  XS: null,
  SM: 481,
  MD: 769,
  LG: 1025,
  XL: 1201
}

//-----------------------------------------------
