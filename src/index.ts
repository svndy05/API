import express from 'express'
const {PORT} = require('./config');
const {User} = require('./routes')
import {connectionDatabase} from './database/connection'
const winston = require('winston')
const Api = async() =>{
    const app = express()
    // const logger = winston.createLogger({
    //     level:'info',
    //     transports:[
    //         new winston.transports.Console()
    //     ]
    // })
    app.use(express.json())
    connectionDatabase()
    User(app)
    app.listen(PORT, () => {
        console.log(`API is Listening to Port ${PORT}`)
    })
}

Api()
