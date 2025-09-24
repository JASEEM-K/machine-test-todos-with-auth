import mongoose, { Schema } from "mongoose";
import type { TaskDocument } from "../types/task.type.js";
import { ref } from "process";

const taskSchema = new Schema<TaskDocument>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    cardColor: {
        type: String,
        required: true,
    },
});
