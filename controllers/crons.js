import CronEmail from "../model/email.js"
import { mailGenerator } from "../mail/mailGenerator.js"
import SENDMAIL from "../mail/mailer.js"
export async function cronjobs(req,res){
    if(req.method !== "GET")return res.status(400).json({message:"invalid method",success:false})
    console.log(req.headers)
    if(req.headers.authorization!== `Bearer ${process.env.CRON_SECRET}`){
        return res.status(400).send('Unauthorized');
    }
    try {
        const Times=await(await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`)).json()

        const emails=await CronEmail.find({ date: { $lte: Times.day }, time: { $lte: Times.hour }, send: false })
        emails.forEach(async(user)=>{
            const Mail= await mailGenerator(user.name,user.jobId,user.emailtype);
            const response=await SENDMAIL(user.email,user.password,user.recievers.split(","),Mail.subject,Mail.message,`resume-${Date.now()}.pdf`,user.resume)
            if(response)await CronEmail.findByIdAndUpdate(user._id,{send:true})
        })
        
           
            res.json({
                Time:Times,
                success:true
            })
    } catch (error) {
        
    }
  
}