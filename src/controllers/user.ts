import { NextFunction,Request,Response } from "express"

module.exports = {
    hello: (req:Request,res:Response,next:NextFunction)=>{
        res.send('Hello world')
    }
}