import { Strategy, ExtractJwt } from 'passport-jwt';
const jwtOptions = {
    secretOrKey: "test",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
export const jwtStrategyMiddleware = new Strategy(jwtOptions, (jwt_payload, done) => {
    console.log(jwt_payload);
    return done(null, { id: 1 });
});
