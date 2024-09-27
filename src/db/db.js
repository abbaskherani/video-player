import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//db is on another continent

const connectDB = async ()=> {
try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //gives a return object
    console.log(`\n mongodb connected !! db host: ${connectionInstance.connection.host}`);
} catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1)
}
}

export default connectDB