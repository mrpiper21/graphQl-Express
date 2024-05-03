export const userTypeDefs = `
    type Query {
        user: User
    }
    type User {
    id: Int!
    name: String!
}`;

export const userResolvers = {
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
};
