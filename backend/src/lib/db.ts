import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

export const connectDb = async () => {
    try {
        const con = await mongoose.connect(MONGO_URI);
        console.log(`DB connected to ${con.connection.host}`);
    } catch (error) {
        console.log(`Error Connecting to the DB ${error}`);
    }
};
