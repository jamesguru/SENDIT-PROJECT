import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import {sqlconfig} from '../config/config'
import Connection from '../Helpers/database'
dotenv.config()

const db = new Connection();
import sendMail from '../Helpers/Email'


interface User{
    id:any,
    name:string
    email: string,
    role:string,
    register:number

}


const WelcomeEmail= async()=>{

    

const users:User[]=  await (await db.exec('userCheck')).recordset




 for(let user of users){

    ejs.renderFile('templates/welcomeuser.ejs',{name:user.name} ,async(error,data)=>{

        let messageoption={
            from:process.env.EMAIL,
            to:user.email,
            subject:"Welcome To SendIT, Thanks for Signing Up!",
            html:data,
            attachments:[
                {
                    filename:'user.text',
                    content:`Welcome email: ${user.name}`
                }
            ]
        }

        try {
            
            await sendMail(messageoption)
            await db.exec('updateUser',{id: user.id})
            
            
        } catch (error) {
            console.log(error);
            
        }


    })

 }


}

export default WelcomeEmail