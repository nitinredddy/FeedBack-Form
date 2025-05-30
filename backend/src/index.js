import { app } from "./app.js";
import dotenv from 'dotenv'
import { connectDB } from "./db/index.db.js";

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Some error has occurred",error)
    })
    app.listen(process.env.PORT,()=>{
        console.log("Server listening on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log("Failed to connect to mongoDB",error)
})