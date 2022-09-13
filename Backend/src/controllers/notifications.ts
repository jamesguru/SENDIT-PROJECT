import {Request,Response} from 'express';


export const getNotifications =(req:Request, res:Response) =>{



    console.log('You got notifications')
    res.status(200).json({message:'notifications'})
}

export const addNotifications = (req:Request, res:Response) => {


}


export const deleteNotifications = (req:Request, res:Response) =>{


}