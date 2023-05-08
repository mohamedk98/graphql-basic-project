import { createUser } from '../services/authentication.service.js';
export const Mutation = {
    Mutation: {
        createUser: async (_, { data }) => {
            return await createUser(data);
        }
    }
};
