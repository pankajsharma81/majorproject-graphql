import { gql } from "graphql-request";

export const CREATE_USER = gql`
mutation CreateUser($name: String!, $email: String!, $username: String!, $password: String!, $role: String!) {
  createUser(name: $name, email: $email, username: $username, password: $password, role: $role) {
    avatar
    email
    id
    name
    role
    username
  }
}
`