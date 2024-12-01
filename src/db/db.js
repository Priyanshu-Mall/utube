import mongoose from 'mongoose';
import {DB_NAME} from "../constant.js"

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);

    }catch(e){
        console.log("MONGODB connection error", e);
        process.exit(1)
    }
}

        
export default connectDB;