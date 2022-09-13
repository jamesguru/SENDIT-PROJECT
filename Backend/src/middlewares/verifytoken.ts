import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
export const VerifyToken =(req:Request, res:Response, next:NextFunction)=>{

   try {
     const token = req.headers['token'] as string

     if(!token){
       return res.status(401).json({message:'You are not authenticated'});
        
     }

      jwt.verify(token, process.env.KEY as string,(error,data) => {


        if(data){

          res.status(200).json({data});
          next()
        }

        return res.json({message:'The token is incorrect'});



      })
       
   } catch (error) {

    return res.json({error})
    
   }

 
}