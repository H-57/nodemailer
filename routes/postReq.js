import  express  from "express";
import {checkAccount}from "../middleware/checkAccount.js"
import{resumeUpload,accountSetup,sendCustomEmail,emails}from "../controllers/postReq.js"
import multer from "multer"

const upload = multer({storage:multer.memoryStorage()})
 const router=express.Router()

router.post("/",checkAccount,emails);
 router.post("/Account",upload.single('resume'),accountSetup);
router.post("/Uploads",checkAccount,upload.single('resume'),resumeUpload);
router.post("/Custom%20Email",checkAccount,sendCustomEmail);


export default router