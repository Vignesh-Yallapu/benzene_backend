// require('dotenv').config({path: '/.env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path : './env'});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
})










/* import express from "express";
const app = express();

( async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('Connected to database:', db.connection.name);
        app.on('error', () => {
            console.error('Error connecting to database:', error);
            throw new Error('Unable to connect to database');
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})();

*/