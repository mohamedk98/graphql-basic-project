import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotEnv from 'dotenv';
import { connect } from 'mongoose';
import { typeDefs } from './graph/typedef.js';
import { Query } from './graph/query.js';
import { Mutation } from './graph/mutation.js';
import cors from 'cors';
dotEnv.config();
const app = express();
app.use(cors());
const server = new ApolloServer({
    typeDefs,
    resolvers: [Query, Mutation]
});
await server.start();
server.applyMiddleware({ app, path: '/graphql' });
// app.use('/',(req,res)=>{
//   res.send({msg:"hello"})
// })
app.listen(process.env.PORT, async () => {
    console.log(`🚀 Server listening at: ${process.env.PORT}`);
    await connect(process.env.DB_CONNECT_STRING, { dbName: process.env.DB_NAME });
    console.log(` 🔐  Database connected successfully`);
});
