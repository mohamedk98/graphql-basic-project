import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id:ID
    firstname: String!
    lastname: String!
    email: String!
    password: String!,
    contactNumber:String!,
  }

  type Query {
    user: User
  }


  input CreateUser {
    firstname: String!
    lastname: String!
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