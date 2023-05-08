import { ApolloError } from 'apollo-server-express';
import { User } from '../models/User.js';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { genSalt, hash } from 'bcrypt-ts';
import { createUserValidation } from '../validations/createUser.schema.js';
export const createUser = async (userData) => {
    const { password, termsAccepted } = userData;
    const { error, value } = await createUserValidation.validateAsync(userData);
    if (error) {
        throw new ApolloError(error.message, ApolloServerErrorCode.BAD_USER_INPUT);
    }
    //   await validateSchemaWithDto(CreateUserDto,userData)
    if (!termsAccepted) {
        throw new ApolloError(' Please accept the terms and conditions', ApolloServerErrorCode.BAD_USER_INPUT);
    }
    try {
        const salt = await genSalt(12);
        const hashedPassword = await hash(password, salt);
        const user = new User(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        await user.save();
        return 'User created successfully';
    }
    catch (error) {
        throw new ApolloError('Ops, something went wrong.Please try again later', error.message);
    }
};
