import mongoose from "mongoose";
import type { UserDocument } from "../types/user.types.js";

const userSchema = new mongoose.Schema<UserDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        passwrod: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;
