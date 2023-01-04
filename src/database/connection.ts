const {MONGO_URL,MONGO_DB} = require('../config');
const mongoose = require('mongoose')

export async function connectionDatabase() {
    try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(MONGO_URL+MONGO_DB)
      console.log('Connected to the database')
    }
    catch(error){
        console.error(error)
    } 
  }