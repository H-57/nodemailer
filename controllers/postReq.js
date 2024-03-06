import { fileUpload } from "../cloudnary/fileUpload.js";
import SENDMAIL from "../mail/mailer.js";
import { mailGenerator } from "../mail/mailGenerator.js";
import CronEmail from "../model/email.js";
//for upload resume 
export const resumeUpload= async(req,res)=>{
    try {
        const file=req.file;
        
        const url=await fileUpload(file)
        console.log(url);
        res.json({message:"uploaded success",success:true,url})
    } catch (error) {
        res.json({message:"error in upload",success:false,error})
    }
}

// for account setup
export const accountSetup= async(req,res)=>{
    try {
        const file=req.file;
        
        const {name,email,password}=await req.body
        console.log(req.body)
      if(!name || !email || !password){
          return res.status(400).json({message:"Please fill all the fields"})
      }
        const url=await fileUpload(file)
        
        res.cookie("email",email)
        res.cookie("password",password)
        res.cookie("name",name)
        res.json({message:"created success",success:true,url})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"error in setup",success:false})
    }
}

export const sendCustomEmail= async(req,res)=>{
    try {
        const{email,password}=await req.cookies
       
        const {recievers,subject,message,resume}=await req.body
    
      if(!recievers || !subject || !message){
          return res.status(400).json({message:"Please fill all the fields"})
      }
    //   console.log(resume)
    const response=await SENDMAIL(email,password,recievers.split(","),subject,message,`resume-${Date.now()}.pdf`,resume)
    // if(!response)throw new Error("email not sent")
        res.json({message:"email sending starts",success:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"error in your credentials",success:false})
    }
}

export const emails=async(req,res)=>{
    try {
        const{email,password,name}=await req.cookies
       
        const {recievers,jobId,emailtype,resume,date,time}=await req.body
    
      if(!recievers || !jobId  || !emailtype || !resume){
          return res.status(400).json({message:"Please fill all the fields",success:false})
      }
      if(date > 0 || time > 0){
          await CronEmail.create({email,password,name,jobId,emailtype,recievers,resume,date,time})
          return res.status(400).json({message:"Your email is sheduled",success:true})
      }
   const Mail= await mailGenerator(name,jobId,emailtype);
    const response=await SENDMAIL(email,password,recievers.split(","),Mail.subject,Mail.message,`resume-${Date.now()}.pdf`,resume)
    // if(!response)throw new Error("email not sent")
        res.json({message:"email sending starts",success:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"error in your credentials",success:false})
    }
}