import {Strategy,ExtractJwt,StrategyOptions} from 'passport-jwt'
import { User } from '../models/User.js'

const jwtOptions :StrategyOptions = {
    secretOrKey:"test",
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  export const jwtStrategyMiddleware = new Strategy(jwtOptions,(jwt_payload,done)=>{
    console.log(jwt_payload)
    return done(null,{id:1})
  })