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
    `gatsby-plugin-image`,
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
    // Add and modify this plugin config to your `gatsby-config.js`:
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "1kAplImjNVteoUDhyEifDB9oVjvAVsSmnpq6ncPleID4",

        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        // spreadsheetName: "Partners",

        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: "GoogleSpreadsheet",

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
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

        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node
      }
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
