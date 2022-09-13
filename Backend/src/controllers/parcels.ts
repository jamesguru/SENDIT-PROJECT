
import {Response,Request} from 'express'
import axios from 'axios'



export const getAllParcels = (req:Request, res:Response) => {

    
    axios.get('http://localhost:8000/api/notifications')

}


export const addParcel = (req:Request,res:Response) =>{


}


export const softDelete = (req:Request, res:Response) => {


}


export const getParcelsForUser = (req:Request,res:Response) =>{



}


export const updateParcelStatus = (req:Request, res:Response) => {


}