import express from "express"
import authRoutes from "./routes/auth.route.js"

import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "https://netflix-ajta.onrender.com",
    credentials: true
}))



app.use("/api/v1/auth",authRoutes)


app.listen( process.env.PORT || 4000,()=>{
    console.log("Server started running at http://localhost/4000")
    connectDb()
})

  
