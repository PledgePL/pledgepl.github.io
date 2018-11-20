/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { GraphQLString, GraphQLObjectType } = require('gatsby/graphql')

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

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `googleSheetPartnersRow`) {
    return {
      logoUrl: {
        type: new GraphQLObjectType({
          name: 'cloudinaryLogoUrl',
          fields: {
            originalUrl: {
              type: GraphQLString,
              description: 'The original url of the media.',
            },
            cloudinaryUrl: {
              type: GraphQLString,
              description: 'The cloudinary url of the media.',
            },
          },
        }),
        resolve: (source, fieldArgs) => {
          let cloudinaryUrl = null
          if (source.logoUrl) {
            // check it is google drive link
            const id = getIdFromGoogleDrive(source.logoUrl)
            cloudinaryUrl =
              source.logoUrl && id
                ? `https://res.cloudinary.com/pledgepl/image/upload/f_auto,dpr_auto/v1542411695/google-drive/${id}`
                : null
          }
          console.log('source', source)
          return {
            originalUrl: source.logoUrl,
            cloudinaryUrl: cloudinaryUrl,
          }
        },
      },
    }
  }

  // by default return empty object
  return {}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log('node.internal.type', node.internal.type)
  if (node.internal.type === 'googleSheetPartnersRow') {
    console.log(`node`, node)
    const {
      createNodeField,
      createNode,
      createParentChildLink,
      deleteNode,
    } = actions
    const rowNode = getNode(node.parent)
    console.log(`actions`, actions)

    // Sanitize CMS output
    if (!node.active) {
      deleteNode({ node })
    }
    // let cloudinaryUrl = null
    // if (node.logoUrl) {
    //   const urlParams = new URLSearchParams(node.logoUrl.split('?')[1])
    //   const id = urlParams.get('id')
    //   cloudinaryUrl =
    //     node.logoUrl && id
    //       ? `https://res.cloudinary.com/pledgepl/image/fetch/${encodeURIComponent(
    //           node.logoUrl
    //         )}` //`https://res.cloudinary.com/pledgepl/image/upload/v1542411695/google-drive/${id}.jpg`
    //       : null
    // }
    // const fieldData = {
    //   cloudinaryUrl,
    // }
    // const driveImageNode = {
    //   ...fieldData,
    //   id: node.id + Math.random().toString(16),
    //   parent: node.id,
    //   children: [],
    //   internal: {
    //     type: `CloudinaryImage`,
    //     contentDigest: crypto
    //       .createHash(`md5`)
    //       .update(JSON.stringify(fieldData))
    //       .digest(`hex`),
    //   },
    // }

    // createNode(driveImageNode)
    // createParentChildLink({ parent: node, child: driveImageNode })
  }
}
