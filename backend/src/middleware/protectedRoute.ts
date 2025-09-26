import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/token.js";
import { ErrorMessage } from "../lib/error.js";

export const ProtectedRoute = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.jwt;

        if (!token)
            throw new ErrorMessage("Token not found", "prot-route", 404);
        const payload = verifyToken(token);
        if (!payload)
            throw new ErrorMessage("Token not valid", "prot-route", 400);
        req.userId = payload.user;
        next();
    } catch (error) {
        next(error);
    }
};
