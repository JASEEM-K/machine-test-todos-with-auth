import type mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    passwrod: string;
}
