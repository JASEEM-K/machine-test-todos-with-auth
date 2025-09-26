import mongoose, { Schema } from "mongoose";
import type { TaskDocument } from "../types/task.type.js";

const taskSchema = new Schema<TaskDocument>(
    {
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
        tags: {
            type: [String],
            default: [],
        },
        repeat: {
            enabled: { type: Boolean, default: false },
            frequency: {
                type: String,
                enum: ["daily", "weekly", "monthly", null],
                default: null,
            },
            daysOfWeek: { type: [Number], default: [] },
            dayOfMonth: { type: [Number], default: [] },
        },
    },
    { timestamps: true }
);

const TaskModel = mongoose.model<TaskDocument>("Task", taskSchema);
export default TaskModel;
