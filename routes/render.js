import express from "express"
import {checkAccount}from "../middleware/checkAccount.js"
  const router=express.Router()

router.get("/",checkAccount,(req,res)=>{
    res.render("Home",{title:"Coldmail- send emails",nav:"Home"})
})
router.get("/Custom%20Email",checkAccount,(req,res)=>{
    res.render("CustomEmail",{title:"Send Custom Emails",nav:"Custom Email"})
})
router.get("/Uploads",checkAccount,(req,res)=>{
    res.render("Uploads",{title:"Upload resume",nav:"Uploads"})
})

router.get("/Account",(req,res)=>{
    res.render("Account",{title:"Fill your account",nav:"Account"})
})

export default router