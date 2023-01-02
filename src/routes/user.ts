import { Application } from "express"

const userCotroller = require('../controllers/user')
module.exports  = (app:Application) => {
    app.get('/',userCotroller.hello)
}