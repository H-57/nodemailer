import mongoose from "mongoose"

const EmailShema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    jobId:{
        type:String,
    },
    emailtype:{
        type:String,
    },
    recievers:{
        type:String,
    },
    resume:{
        type:String,
    },
    date:{
        type:Number,
    },
    time:{
        type:Number,
    },
    send:{
        type:Boolean,
        default:false
    }


})
const CronEmail=mongoose.model("Email",EmailShema)
export default CronEmail