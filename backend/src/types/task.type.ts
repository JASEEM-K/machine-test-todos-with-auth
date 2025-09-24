import type mongoose from "mongoose";

export interface TaskDocument extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    isDone: boolean;
    title: string;
    description: string;
    cardColor: string;
    tags: string[];
}
