import type mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
}

export interface IRegisterUser {
    name: string;
    email: string;
    password: string;
}

export interface ILogUser {
    email: string;
    password: string;
}
