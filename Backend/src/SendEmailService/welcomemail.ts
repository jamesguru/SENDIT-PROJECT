import ejs from 'ejs';

import sendMail from '../Helpers/send_mail';



const sendWelcomeEmail = async (name:string,email:string)=> {


    


    ejs.renderFile('templates/welcomeuser.ejs',{name}, async(err,data) =>{


        let messageoption = {

            from:process.env.EMAIL,
            to:email,
            subject:'Welcome to SendIt',
            html:data,
            attachments:[{

                filename:'welcome.txt',
                content:`Thanks a lot for choosing us`
            }]
        }


        try {
            
            sendMail(messageoption);

           
        } catch (error) {

            console.log(err)
            
        }


    }) 

}


export default sendWelcomeEmail;