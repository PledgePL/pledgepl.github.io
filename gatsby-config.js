const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
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
        credentials: require('./client_secret.json'),
      },
    },
    {
      resolve: `@fs/gatsby-plugin-drive`,
      options: {
        folderId: `1HoeAFM1lC150t1Wae7l2qjXcDdd7QGto`,
        keyFile: path.resolve(__dirname, 'client_secret.json'),
        destination: path.join(__dirname, `src/images/logos`),
      },
    },
    {
      resolve: '@dylanvann/gatsby-transformer-cloudinary',
      options: {
        cloudName: 'pledgepl',
        apiKey: '969238436821772',
        apiSecret: '-hqUbJ4eGbAjs4L3cy0In54UpIY',
      },
    },
  ],
}
