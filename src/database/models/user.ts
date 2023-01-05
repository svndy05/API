const mongoose = require('mongoose')
const {Schema} =mongoose

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:[true,'email utilisé'],
        validate:{
            validator: function(email:string){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
            },
            message:'Email invalide'
        }
    },
    password:{
        type:String,
        required:true,
    }
})
export const User = mongoose.model('users',userSchema)