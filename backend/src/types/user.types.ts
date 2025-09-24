import type mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    passwrod: string;
}

export interface IRegisterUser {
    name: string;
    email: string;
    passwrod: string;
}

export interface ILogUser {
    email: string;
    passwrod: string;
}
