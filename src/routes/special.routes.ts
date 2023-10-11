import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/special', passport.authenticate('jwt',{session: false}), (req, res) => {
    res.send('success')
}) // * Si llega una oeticon aqui primero va hacer validado por passport authenticate

export default router