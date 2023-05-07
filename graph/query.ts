import { User } from '../models/User.js'
export const Query = {
  Query: {
    user: async (_,__,context) => {
      console.log(context)
      return await User.find()
    }

  },
}
