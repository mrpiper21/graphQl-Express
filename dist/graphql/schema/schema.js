import { userTypeDefs, userResolvers } from "../models/user.js";
import _ from "lodash";
import { createSchema, createYoga } from "graphql-yoga";
const queries = `
  type Query {
    hello: String
    user: User
}`;
const resolvers = {
    Query: {
        hello: () => "Hello world",
    },
};
export const yoga = createYoga({
    schema: createSchema({
        typeDefs: [queries, userTypeDefs],
        resolvers: _.merge(resolvers, userResolvers),
    }),
});
// export const schema = buildSchema(`
//   type Product {
//     id: String!
//     title: String!
//     description: String!
//     price: Int!
//   },
//   type Query {
//     product: Product
//   }
// `);
// const User = new GraphQLObjectType({
//   name: "User",
//   fields: {
//     id: {
//       type: GraphQLInt,
//     },
//     name: {
//       type: GraphQLString,
//     },
//   },
// });
// export const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Query",
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve: () => {
//           return "Hello world";
//         },
//       },
//       user: {
//         type: User,
//         resolve: () => {
//           return {
//             id: 1,
//             name: "john doe",
//           };
//         },
//       },
//     },
//   }),
// });
