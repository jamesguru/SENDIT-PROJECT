import {Request,Response} from 'express';


export const getusers = (req:Request,res:Response) => {


    res.status(200).json({message:'all users'})

}


export const signUp=(req:Request,res:Response) => {

    const {email} = req.body;

    res.status(200).json({message:'user is signup'});


}

export const signIn = (req:Request,res:Response) => {

    res.status(200).json({message:'users is signin'})
}