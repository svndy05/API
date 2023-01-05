import { NextFunction,Request,Response } from "express"
import { signUp } from "../services/user";

module.exports = {
    signUp: async (req:Request,res:Response,next:NextFunction)=>{
        const response = await signUp(req.body)
        res.status(response).json()
    }
}