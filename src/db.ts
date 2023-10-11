import mongoose from 'mongoose'
import config from './config/config'

export const dbConnect = async () => {
    try {
        // const db = await mongoose.connect('mongodb://127.0.0.1/pruebatypescriptjwt')
        const db = await mongoose.connect(config.DB.URI)
        console.log('Database is connected to', db.connection.db.databaseName)
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}