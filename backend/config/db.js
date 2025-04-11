import mongoose from "mongoose"
import { ENV_VARS } from "./envVars.js"

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("Error in connecting to database",error.message)
        process.exit(1)
    }
}

export default connectDb