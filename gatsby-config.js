const path = require('path')
require('dotenv').config()

// pre process the GOOGLE_PRIVATE_KEY
process.env.GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
  ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  : process.env.GOOGLE_PRIVATE_KEY

console.log('process.env.GOOGLE_TYPE', process.env.GOOGLE_TYPE)
console.log('process.env.GOOGLE_PROJECT_ID', process.env.GOOGLE_PROJECT_ID)
console.log(
  'process.env.GOOGLE_PRIVATE_KEY_ID',
  process.env.GOOGLE_PRIVATE_KEY_ID
)
console.log('process.env.GOOGLE_PRIVATE_KEY', process.env.GOOGLE_PRIVATE_KEY)
console.log('process.env.GOOGLE_CLIENT_EMAIL', process.env.GOOGLE_CLIENT_EMAIL)
console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID)
console.log('process.env.GOOGLE_AUTH_URI', process.env.GOOGLE_AUTH_URI)
console.log('process.env.GOOGLE_TOKEN_URI', process.env.GOOGLE_TOKEN_URI)
console.log(
  'process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URI',
  process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URI
)
console.log(
  'process.env.GOOGLE_CLIENT_X509_CERT_URL',
  process.env.GOOGLE_CLIENT_X509_CERT_URL
)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1kAplImjNVteoUDhyEifDB9oVjvAVsSmnpq6ncPleID4',
        worksheetTitle: 'Partners',
        credentials: {
          type: process.env.GOOGLE_TYPE,
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: process.env.GOOGLE_AUTH_URI,
          token_uri: process.env.GOOGLE_TOKEN_URI,
          auth_provider_x509_cert_url:
            process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URI,
          client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
        },
      },
    },
    // {
    //   resolve: `@fs/gatsby-plugin-drive`,
    //   options: {
    //     folderId: `1HoeAFM1lC150t1Wae7l2qjXcDdd7QGto`,
    //     keyFile: path.resolve(__dirname, 'client_secret.json'),
    //     destination: path.join(__dirname, `src/images/logos`),
    //   },
    // },
    // {
    //   resolve: '@dylanvann/gatsby-transformer-cloudinary',
    //   options: {
    //     cloudName: 'pledgepl',
    //     apiKey: '969238436821772',
    //     apiSecret: '-hqUbJ4eGbAjs4L3cy0In54UpIY',
    //   },
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
    //   {
    //     resolve: `gatsby-plugin-polyfill-io`,
    //     options: {
    //        features: [`IntersectionObserver`]
    //     },
    //  },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Roboto+Slab`,
    //       `Roboto\:300,400`
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto+Slab`,
            subsets: [`latin`],
            variants: [`400`],
          },
          {
            family: `Roboto`,
            subsets: [`latin-ext`],
            variants: [`400`],
          },
        ],
      },
    },
  ],
}
