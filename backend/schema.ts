import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Weather',
    fields: {
      weather: {
        type: GraphQLString,
        resolve() {
         return 'sunny'
        },
      },
    },
  }),
})