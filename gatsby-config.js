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
    title: 'Pledge Parental Leave: Four simple requirements. One monumental statement.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pledge Parental Leave`,
        short_name: `PledgePL`,
        start_url: `/`,
        background_color: `#f0f5fa`,
        theme_color: `#989cd7`,
        display: `minimal-ui`,
        icon: `src/images/pledgepl-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: origin-when-cross-origin',
          ],
        },
        mergeLinkHeaders: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    /*{
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
    },*/
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto+Slab\:400`,
          `Roboto\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-70105354-1"
      },
    },
    {
      resolve: 'gatsby-plugin-brotli'
    }
  ],
}
