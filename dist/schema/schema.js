import { createSchema, createYoga } from "graphql-yoga";
const queries = `
  type Query {
    hello: String
    user: User
}`;
const userTypeDefs = `
type User {
  id: Int
  name: String
}`;
export const yoga = createYoga({
    schema: createSchema({
        typeDefs: [queries, userTypeDefs],
        resolvers: {
            Query: {
                hello: () => "hello Yoga",
                user: () => {
                    return {
                        id: 1,
                        name: "rose",
                    };
                },
            },
            User: {
                name: (parent) => {
                    return parent.name.toUpperCase();
                },
            },
        },
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
