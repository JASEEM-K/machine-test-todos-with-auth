import type mongoose from "mongoose";

export interface TaskDocument extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    isDone: boolean;
    title: string;
    description: string;
    cardColor: string;
    tags: string[];
    repeat: {
        enabled: boolean;
        frequency: ["daily", "weekly", "monthly", null];
        daysOfWeek: [{ type: Number }];
        dayOfMonth: { type: [Number] };
    };
}
