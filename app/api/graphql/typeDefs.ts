import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    loginUser(userCred: String!, password: String!): Boolean
    currentUser: User
    getAllUsers: [User]

    getAllProducts:[Product]
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      username: String!
      password: String!
      role: String!
    ): User

    updatedUserRole(userId: String!, role: String!): Boolean

    updatedUserProfile(
      userId: String!
      name: String!
      email: String!
      username: String!
      avatar: String
    ): Boolean

    # Product
    addProducts(title:String!,description:String!,category:String!,price:Float!,stock:Int!,ImageUrl:String!):Product
  }
  
  type Product {
  id:         String          
  title:       String
  description: String
  category:    String
  price:       Float
  stock:      Int
  ImageUrl:   String
 
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
