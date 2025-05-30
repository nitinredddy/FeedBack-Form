import express from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cookieParser())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//////////////////////////////////////////////////

import feedbackRouter from "./routes/feedback.routes.js"

app.use("/api/v1",feedbackRouter)

export {app}
