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

export const ADD_PRODUCT=gql`
mutation Mutation($title: String!, $description: String!, $category: String!, $price: Float!, $stock: Int!, $imageUrl: String!) {
  addProduct(title: $title, description: $description, category: $category, price: $price, stock: $stock, imageUrl: $imageUrl) {
    id
    title
    description
    category
    price
    stock
    imageUrl
  }
}`