import { gql } from "graphql-request";

export const LOGIN_USER = gql`
  query Query($userCred: String!, $password: String!) {
    loginUser(userCred: $userCred, password: $password)
  }
`;

export const GET_ALL_USER = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      username
      email
      avatar
      role
    }
  }
`;

export const GET_ALL_PRODUCT = gql`
query GetAllProducts {
  getAllProducts {
    id
    title
    description
    category
    price
    stock
    ImageUrl
  }
}`