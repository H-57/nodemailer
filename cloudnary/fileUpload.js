import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'



cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret,
    secure: true
  });

  export const fileUpload=async(file)=>{
    
  

const result=await new Promise((resolve, reject) => {
    
    cloudinary.uploader.upload_stream({folder: 'coldmailer'},(error,result)=>{
        if(error){
            reject(error);
            return;
        }

        resolve(result?.secure_url)
    }).end(file.buffer)
})

return result;
  };
 