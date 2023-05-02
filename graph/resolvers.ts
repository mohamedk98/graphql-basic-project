import { error } from 'console'
import { User } from '../models/User.js'
import { ApolloError } from 'apollo-server-express'
export const resolvers = {
  Query: {
    user: async () => {
      return await User.find()
    }
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = new User(args.data)
      try {
        await user.save()
        return 'User created Successfully'
      } catch (error) {
        throw new ApolloError(
          'Ops,something went wrong.Please try again later',
          error.message
        )
      }
    }
  }
}
