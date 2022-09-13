
import {Response,Request} from 'express'
import axios from 'axios'
import sendDeliveredParcelEmail from '../SendEmailService/deliveredParcelmail'
import sendWelcomeEmail from '../SendEmailService/welcomemail'



export const getAllParcels = (req:Request, res:Response) => {

    
    

}


export const addParcel = (req:Request,res:Response) =>{


}


export const softDelete = (req:Request, res:Response) => {


}


export const getParcelsForUser = (req:Request,res:Response) =>{



}


export const updateParcelStatus = async (req:Request, res:Response) => {

    

    const {name,email,trackId} = req.body;

    console.log('helooo',name,email,trackId)

    await sendDeliveredParcelEmail(email,name,trackId)
    await sendWelcomeEmail(name,email)

}