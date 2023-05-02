var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { User } from '../models/User.js';
import { ApolloError } from 'apollo-server-express';
import { genSalt, hash } from 'bcrypt-ts';
export const Mutation = {
    Mutation: {
        createUser: async (_, { data }) => {
            const { password, repassword, termsAccepted } = data, userData = __rest(data, ["password", "repassword", "termsAccepted"]);
            if (password !== repassword) {
                throw new ApolloError(" Password and retyped password don't match", ApolloServerErrorCode.BAD_USER_INPUT);
            }
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
        }
    }
};
