
import {Response,Request, RequestHandler} from 'express'
import axios from 'axios'
import Connection from "../Helpers/database";
import { Extended } from '../interfaces/Parcels';

const db = new Connection();




export const getAllParcels = async (req:Extended, res:Response) => {

   
    try {

        const parcel = await db.exec('getAllParcels');

        res.status(200).json(parcel.recordset)
        
    } catch (error) {


        res.status(404).json({message:'parcel not found'})
        
    }
    

}


export const addParcel = async (req:Request,res:Response) =>{

    const {id,senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status,deleted} =req.body


    

    try {



        await db.exec('insertUpdateParcel',{id,senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status,deleted})

    res.status(200).json({message:'parcel added successfully'})
    } catch (error) {


        res.status(400).json({message:'parcel upload failed'})
        
    }


}


export const softDelete: RequestHandler<{id:string}>  = async(req:Request, res:Response) => {



    const id = req.params.id;
    const {deleted} =req.body;


    try {


        await db.exec('softDelete',{id,deleted})


        res.status(201).json({message:'data has been deleted successfully'})
        
    } catch (error) {


        res.status(400).json({message:'data has not been added'})
        
    }


}


export const getParcelsForUser = async (req:Request,res:Response) =>{


    const {email} = req.body;


    try {

        const parcels = await db.exec('getParcelsForUser',{email})


        res.status(200).json(parcels.recordset)
        
    } catch (error) {
        
        res.status(404).json({message:'Parcel was not found'})
    }


}


export const updateParcelStatus:RequestHandler<{id:string}> = async (req:Request, res:Response) => {



    const id = req.params.id;

    const {senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status,deleted} =req.body

    try {

        await db.exec('insertUpdateParcel',{id,senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status,deleted})

       

        await axios.post('http://localhost:8000/api/notifications',{trackId,email:receiverEmail,message:`Your order ${trackId} has been delivered`} as any)
        res.status(201).json({message:'parcel updated successfully'})
        
    } catch (error) {
        

    res.status(404).json({message:'parcel was not found'})
    }
    

    
    
}