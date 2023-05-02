import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id:ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!,
    contactNumber:String!,
  }

  type Query {
    user: User
  }


  input CreateUser {
    firstName: String!
    lastName: String!
    email: String!
    password: String!,
    repassword:String!,
    contactNumber:String!,
    termsAccepted:Boolean!
  }

  type Mutation {
    createUser(data:CreateUser):String
  }
`