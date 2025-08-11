import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    loginUser(userCred: String!, password: String!): Boolean
    currentUser: User
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      username: String!
      password: String!
    ): User

    updatedUserRole(userId: String!, role: String!): Boolean

    updatedUserProfile(userId:String!,name:String!,email:String!,username:String!,avatar:String):Boolean
  }

  type User {
    id: String
    name: String
    username: String
    email: String
    avatar: String
    role: String
  }
`;

export default typeDefs;
