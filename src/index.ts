import express from 'express'
const {PORT} = require('./config');
const {User} = require('./routes')

const app = async() =>{
    const app = express()
    app.use(express.json())
    User(app)
    app.listen(PORT, () => {
        console.log(`USER_MICROSERVICE is Listening to Port ${PORT}`)
    })
}

app()
