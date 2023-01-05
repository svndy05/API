const {MONGO_URL,MONGO_DB,MONGO_AUTH_SOURCE,MONGO_PASS,MONGO_USER} = require('../config');
const mongoose = require('mongoose')

export async function connectToDatabase() {
    try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(`${MONGO_URL}${MONGO_DB}`,{
        authSource:MONGO_AUTH_SOURCE,
        user:MONGO_USER,
        pass:MONGO_PASS
      })
      console.log('Connected to the database')
    }
    catch(error){
        console.error(error)
    } 
  }