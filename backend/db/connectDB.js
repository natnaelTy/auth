import mongoose from "mongoose"


export const connectDB = async () => {
  try{
    console.log(`MONGO URI :`, process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  }catch(err){
    console.log(`Error connection to mongodb:`, err.message);
    process.exit(1);
  }
}