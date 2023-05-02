import { ApolloServerErrorCode } from '@apollo/server/errors'
import { User } from '../models/User.js'
import { ApolloError } from 'apollo-server-express'
import { genSalt, hash } from 'bcrypt-ts'
export const Mutation = {
  Mutation: {
    createUser: async (_, { data }) => {
      const { password, repassword, termsAccepted, ...userData } = data;
  
      if (password !== repassword) {
        throw new ApolloError(
          " Password and retyped password don't match",
          ApolloServerErrorCode.BAD_USER_INPUT
        );
      }
  
      if (!termsAccepted) {
        throw new ApolloError(
          ' Please accept the terms and conditions',
          ApolloServerErrorCode.BAD_USER_INPUT
        );
      }
  
      try {
        const salt = await genSalt(12);
        const hashedPassword = await hash(password, salt);
        const user = new User({ ...userData, password: hashedPassword });
        await user.save();
        return 'User created successfully';
      } catch (error) {
        throw new ApolloError(
          'Ops, something went wrong.Please try again later',
          error.message
        );
      }
    }
  }
}
