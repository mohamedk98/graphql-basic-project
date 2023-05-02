import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id:ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
  }
  type Query {
    user: User
  }


  input CreateUser {
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Mutation {
    createUser(data:CreateUser):String
  }
`