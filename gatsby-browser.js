/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require('react')
const Layout = require('./src/components/layout').default

// const LayoutRenderer = ({ PageComponent, pageProps }) => 
//   <Layout {...pageProps}><PageComponent {...pageProps} /></Layout>

// export const replaceComponentRenderer = ({ props: { pageResources, ...pageProps } }) => 
//   <LayoutRenderer PageComponent={pageResources.component} pageProps={pageProps} />

exports.wrapPageElement = ({ element, props }) => (
            <Layout {...props}>{element}</Layout>
          );

// const LayoutRenderer = ({ PageComponent, pageProps }) => (
//   <Layout {...pageProps}>
//     <PageComponent {...pageProps} />
//   </Layout>
// )

// export const replaceComponentRenderer = ({
//   props: { pageResources, ...pageProps },
// }) => (
//   <LayoutRenderer
//     PageComponent={pageResources.component}
//     pageProps={pageProps}
//   />
// )
