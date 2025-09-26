import jwt from "jsonwebtoken";
import type { Payload } from "../types/token.types.js";
import { JWT_SECRET } from "./env.js";

export const createToken = (payload: Payload) => {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "30d",
    });
    return token;
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET) as Payload;
    } catch (error) {
        return null;
    }
};
