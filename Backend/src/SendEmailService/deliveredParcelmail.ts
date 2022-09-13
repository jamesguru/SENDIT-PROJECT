import ejs from 'ejs';

import sendMail from '../Helpers/send_mail';


const sendDeliveredParcelEmail = async (email:string,name:string,trackId:string)=> {


    ejs.renderFile('templates/deliveredparcel.ejs',{name,trackId}, async (err,data) =>{


        let messageoption = {

            from:process.env.EMAIL,
            to:email,
            subject:`${name} your parcel has been delivered`,
            html:data,
            attachments:[{

                filename:'parcel.txt',
                content:'Here is the content for the parcel delivered'
            }]
        }


        try {
            
            sendMail(messageoption);

        } catch (error) {

            console.log(err)
            
        }


    }) 

}


export default sendDeliveredParcelEmail;