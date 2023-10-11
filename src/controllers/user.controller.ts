import { Request, Response } from 'express'
import User, { Iuser } from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'

function createToken(user: Iuser) {
    //* Metodo para crear el token del user
    return jwt.sign({
        id: user.id,
        email: user.email
    }, config.jwtSecret, {
        expiresIn: 86400 //* expira en un dia el token
    })
}

export const signUp = async (req: Request, res: Response) => {
    const {email, password} = req.body
    try {
        if (!email || !password) throw new Error('Please send your email and password')
        const user = await User.findOne({email})
        if (user) throw new Error('The user already exists')
        const newUser = new User({
            email,
            password
        })
        await newUser.save()
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(404).json({msg: error})
    }
}

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        if (!email || !password) throw new Error('Please send your email and password')
        const user = await User.findOne({email})
        if (!user) throw new Error('The user does not exists')
        const isMacth = await user.comparePassword(password)
        if (!isMacth) throw new Error('The email or password are incorrect')
        return res.status(200).json({token: createToken(user)})
    } catch (error) {
        return res.status(404).json({msg: error})
    }
}