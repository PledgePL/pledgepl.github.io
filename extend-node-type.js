const gql = require("gatsby/graphql")
const GraphQLString = gql.GraphQLString

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `File`) {
    return {
      newField: {
        type: GraphQLString,
        args: {
          myArgument: {
            type: GraphQLString,
          }
        },
        resolve: (source, fieldArgs) => {
          return `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.myArgument}`
        }
      }
    }
  }

  // by default return empty object
  return {}
}