import  express  from "express";
import {cronjobs} from "../controllers/crons.js"
const router=express.Router()

router.get("/crons",cronjobs)

export default router