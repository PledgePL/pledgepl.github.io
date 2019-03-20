const React = require('react')
const Layout = require('./src/components/layout').default

// export const replaceRenderer = ({ bodyComponent }) => {
//     const page = bodyComponent.children.props.children
//     bodyComponent.children.props.children = <YourLayout {...page.props}>{page}</YourLayout>
//     return bodyComponent
//   }


// exports.wrapRootElement = ({ element, props }) => (
//   <Layout {...props}>{element}</Layout>
// );

    exports.wrapPageElement = ({ element, props }) => (
        <Layout {...props}>{element}</Layout>
      );

// export const replaceRenderer = ({ bodyComponent }) => {
//   const page = bodyComponent.children.props.children
//   bodyComponent.children.props.children = (
//     <Layout {...page.props}>{page}</Layout>
//   )
//   return bodyComponent
// }
