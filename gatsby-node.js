/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
} = require('gatsby/graphql')

const getIdFromGoogleDrive = url => {
  let id = ''
  const parts = url.split(
    /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
  )
  if (url.indexOf('?id=') >= 0) {
    id = parts[6].split('=')[1].replace('&usp', '')
    return id
  } else {
    id = parts[5].split('/')
    //Using sort to get the id as it is the longest element.
    const sortArr = id.sort(function(a, b) {
      return b.length - a.length
    })
    id = sortArr[0]
    return id
  }
}

const getCloundinaryUrl = (id, w = 900) =>
  `https://res.cloudinary.com/pledgepl/image/upload/f_auto,w_${w},ar_1:1,c_pad,dpr_auto/v1542411695/google-drive/${id}`

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `googleSheetPartnersRow`) {
    return {
      fluid: {
        type: new GraphQLObjectType({
          name: 'cloudinaryFluidObject',
          fields: {
            aspectRatio: {
              type: GraphQLInt,
              description: 'aspect ratio',
            },
            width: {
              type: GraphQLInt,
              description: 'width of original image',
            },
            height: {
              type: GraphQLInt,
              description: 'height of original image',
            },
            src: {
              type: GraphQLString,
              description: 'src',
            },
            srcSet: {
              type: GraphQLString,
              description: 'srcSet',
            },
            sizes: {
              type: GraphQLString,
              description: 'sizes',
            },
            originalName: {
              type: GraphQLString,
              description: 'sizes',
            },
            presentationWidth: {
              type: GraphQLInt,
              description: 'presentationWidth',
            },
            presentationHeight: {
              type: GraphQLInt,
              description: 'presentationHeight',
            },
          },
        }),
        resolve: (source, fieldArgs) => {
          const id = source.logoUrl ? getIdFromGoogleDrive(source.logoUrl) : null
          return {
            aspectRatio: 1,
            width: 600,
            height: 600,
            src: id ? getCloundinaryUrl(id, 600) : "",
            srcSet: id ? `${getCloundinaryUrl(id, 300)} 300w,${getCloundinaryUrl(id, 600)} 600w,${getCloundinaryUrl(id, 900)} 900w,${getCloundinaryUrl(id, 1200)} 1200w` : "",
            originalName: source.logoUrl,
            presentationWidth: 600,
            presentationHeight: 600,
          }
        },
      },
     
    }
  }

  // by default return empty object
  return {}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'googleSheetPartnersRow') {
    const {
      createNodeField,
      createNode,
      createParentChildLink,
      deleteNode,
    } = actions
    const rowNode = getNode(node.parent)

    // Sanitize CMS output
    if (!node.active) {
      deleteNode({ node })
    }
  }
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'styled-components': require.resolve('@emotion/styled'),
        globby: require.resolve('fast-glob'), // MUST KEEP. coz of error in gatsby-plugin-prefetch-google-fonts, with globby
      },
    },
  })
}
