import mongoose from 'mongoose';

const DB_NAME = "db"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected DB host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error has occurred ",error)
        process.exit(1)
    }
}


export {connectDB}