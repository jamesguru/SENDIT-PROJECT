import express from 'express'
import cron from 'node-cron'
import DeliveredEmail from './EmailService/DeliveredEmailService';
import WelcomeEmail from './EmailService/WelcomeEmailService'


const app = express()

const run =()=>{
    cron.schedule('* * * * *', async()=>{


        await WelcomeEmail()
        await DeliveredEmail()

     
    })
}
run()

app.listen(8002, ()=>{
    console.log('Email service is running on port:',8002);
    
})