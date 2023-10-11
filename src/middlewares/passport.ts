//* Passport permite autenticar con redes sociales, con tu propia base dedatos y con jsonwebtoken 
import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt'
import config from '../config/config'
import User from '../models/user'

const opts: StrategyOptions = {
    //* De donde voy a obtner el token
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //*c Basado en que llave va a decifrar eso
    secretOrKey: config.jwtSecret,

}

export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await User.findById(payload.id)
        if (user) {
            return done(null, user)
        }
        return done(null, false)
    } catch (error) {
        console.log(error)
    }
})
