export const userTypeDefs = `
    type Query {
        user: User
    },
    type Mutation {
        createUser(user: NewUserInput): User
    }

    input NewUserInput {
        name: String!
        age: Int!
    }
    type User {
        id: Int!
        name: String!
        age: Int!
    }`;

export const userResolvers = {
  Query: {
    hello: () => "hello Yoga",
    user: () => {
      return {
        id: 1,
        name: "rose",
        age: 4,
      };
    },
  },

  Mutation: {
    createUser: (_, args) => {
      // insert into DB

      console.log({ id: 1, ...args });

      return { id: 1, ...args.user };
    },
  },
  User: {
    name: (parent) => {
      // the actual name or returned value from the create user Mutation (parent)
      return parent.name.trim().toUpperCase();
    },
  },
};
