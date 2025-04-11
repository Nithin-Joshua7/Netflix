import express from "express"
import authRoutes from "./routes/auth.route.js"
import movieRoutes from "./routes/movie.route.js"
import tvroutes from "./routes/tv.route.js"
import searchroutes from "./routes/search.route.js"
import { ENV_VARS } from "./config/envVars.js"
import connectDb from "./config/db.js"
import { protectRoute } from "./middleware/protectRoute.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())

const PORT = ENV_VARS.PORT

app.use("/api/v1/auth",authRoutes)

app.use("/api/v1/movie",protectRoute,movieRoutes)

app.use("/api/v1/tv",protectRoute,tvroutes)

app.use("/api/v1/search",protectRoute,searchroutes)

app.listen(PORT,"localhost",()=>{
    console.log("Server started running at http://localhost/4000")
    connectDb()
})

  