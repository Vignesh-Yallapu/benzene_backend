import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('Connected to database:', db.connection.name);
    } catch (error) {
        console.error('(connectDB) Error connecting to database:', error);
        process.exit(1);
    }
};

export default connectDB;