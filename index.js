import  express from "express";
import bodyParser from 'body-parser'
import renderRoutes from "./routes/render.js"
import postRoutes from "./routes/postReq.js"
import cookieParser from "cookie-parser";
import path from "path";
const app=express();


app.set('view engine',"ejs")
app.set('views', path.join(new URL('.', import.meta.url).pathname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());

app.use("/",renderRoutes)
app.use("/",postRoutes)



app.get("*",(req,res)=>{
    res.status(404).render('error',{title:"page not found",nav:"Home"})
})




app.listen(4000,()=>{
    console.log("server is started at http://127.0.0.1:4000")
})