import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { Data } from '../interfaces/Users';


interface Extended extends Request{

  info?:Data
}



export const VerifyToken =(req:Extended, res:Response, next:NextFunction)=>{

   try {
     // const token = req.headers['token'] as string


     const bearerHeader=req.headers['authorization']

     

      const bearer = bearerHeader!.split(' ');


      
      const token = bearer[1];

    
      

      if(!token){

        return res.status(403).json({message:"You are not authenticated"});
      }

      const data = jwt.verify(token, process.env.KEY as string) as Data 

      req.info  = data;

     
       
   } catch (error) {

    return res.json({error})
    
   }

   next()
        
 
}