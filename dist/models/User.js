import { Schema, model, } from 'mongoose';
import { randomUUID } from 'crypto';
const userSchema = new Schema({
    id: { type: 'UUID', default: () => randomUUID() },
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});
export const User = model('user', userSchema);
