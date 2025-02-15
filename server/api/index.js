import dotenv from 'dotenv';
import connectDB from '../src/db/index.js';
import { app } from '../src/app.js';
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.error("error in app.on",error)
        throw error
    })
    
})
.catch((error)=>{
    console.log("mongoDB connection failed",error);
})








