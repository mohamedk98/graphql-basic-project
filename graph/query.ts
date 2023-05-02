import { User } from '../models/User.js'
export const Query = {
  Query: {
    user: async () => {
      return await User.find()
    }
  },
}
