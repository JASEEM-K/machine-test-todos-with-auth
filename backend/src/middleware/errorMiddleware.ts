import type { NextFunction, Request, Response } from "express";
import { ErrorMessage } from "../lib/error.js";

export const ErrorMiddelware = (
    err: ErrorMessage | any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ErrorMessage) {
        console.log(`Error : ${err.errorCode} \n ${err.message} \n ${err}`);
        res.status(err.statusCode).json({
            message: err.message,
            error: err.errorCode,
            status: "error",
        });
    } else {
        console.log(`Error : ${err}`);
        res.status(500).json({
            message: "Internal server Error",
            status: "error",
        });
    }
};
