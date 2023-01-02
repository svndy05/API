import * as dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'prod'){
    dotenv.config({path:`./.env.${process.env.NODE_ENV}`})
}else{
    dotenv.config()

}

module.exports={
    PORT:process.env.PORT
}