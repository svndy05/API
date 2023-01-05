import bodyParser from 'body-parser';
import express from 'express'
const {PORT} = require('./config');
const {User} = require('./routes')
import {connectToDatabase} from './database/connection'
import {loggerInfo } from './controllers/middlewares/logger';
const Api = async() =>{
    const app = express()
    app.use(bodyParser.urlencoded())
    app.use(express.json())
    await connectToDatabase()
    app.use(loggerInfo)
    User(app)
    app.listen(PORT, () => {
        console.log(`API is Listening to Port ${PORT}`)
    })
}
Api()
