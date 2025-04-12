import express from "express"
import authRoutes from "./routes/auth.route.js"

import { ENV_VARS } from "./config/envVars.js"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


const PORT = ENV_VARS.PORT

app.use("/api/v1/auth",authRoutes)


app.listen(PORT,"localhost",()=>{
    console.log("Server started running at http://localhost/4000")
    connectDb()
})

  