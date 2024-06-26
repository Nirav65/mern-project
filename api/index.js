import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}!!!`);
});

app.use("/api/users", userRouter);