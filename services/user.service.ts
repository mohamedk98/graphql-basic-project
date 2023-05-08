import { UUID } from "crypto";
import { User } from "../models/User.js";
import { ApolloError } from "apollo-server-express";
import { GraphErrorCodes } from "../types/apollo.errors.js";

export const getUserById = async  (id:UUID)=>{

    const user = await User.findById(id)

    if (!user) {
        throw new ApolloError("User not found",GraphErrorCodes.NOT_FOUND)
    }

    return user
}

export const getUserByEmail = async (email:string) => {

    const user = await User.findOne({email})

    if (!user) {
        throw new ApolloError("User not found",GraphErrorCodes.NOT_FOUND)
    }

    return user
}






