import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/index'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

const app = express()

//* settings
app.set('port', process.env.PORT || 3000)

//* Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize()) //* Para que inicie passport
passport.use(passportMiddleware) //* que utilice desde mi funcion passport middlewares
app.use('/', router)

//* routes
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`)
})

export default app