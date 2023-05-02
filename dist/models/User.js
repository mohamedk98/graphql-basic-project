import { Schema, model, } from 'mongoose';
import { randomUUID } from 'crypto';
const userSchema = new Schema({
    id: { type: 'UUID', default: () => randomUUID() },
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
});
export const User = model('user', userSchema);
