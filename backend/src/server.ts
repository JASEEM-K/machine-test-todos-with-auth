import express from "express";
import "dotenv/config";
import { PORT } from "./lib/env.js";

const app = express();

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:3000`);
});
