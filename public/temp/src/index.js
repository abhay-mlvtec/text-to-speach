import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express';
dotenv.config({path: './env'});

const app = express();


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error:", error)
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listening on port ${process.env.PORT || 8000}`)
    })
})
.catch((err => {
    console.log(`Mongo Db Connection error: ${err}`)
}))
