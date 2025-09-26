import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { FRONTEND_URL, PORT } from "./lib/env.js";
import { ErrorMiddelware } from "./middleware/errorMiddleware.js";
import taskRouter from "./routes/taskRoute.js";
import authRouter from "./routes/authRoute.js";
import { connectDb } from "./lib/db.js";

const app = express();
app.use(express.json({}));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
    })
);

// Routes
app.use("/api/task", taskRouter);
app.use("/api/auth", authRouter);

app.use(ErrorMiddelware);
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is Running on http://localhost:3000`);
});
