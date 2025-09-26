import {
    Router,
    type NextFunction,
    type Request,
    type Response,
} from "express";
import { AuthController } from "../controller/authController.js";
import { ProtectedRoute } from "../middleware/protectedRoute.js";
import { ErrorMessage } from "../lib/error.js";

const authRouter = Router();

authRouter.post(
    "/register",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const user = await new AuthController().regster(body);
            res.cookie("jwt", user.token, { httpOnly: true }).status(201).json({
                message: "user registered",
                status: "success",
                data: user.data,
            });
            next();
        } catch (err) {
            next(err);
        }
    }
);

authRouter.post(
    "/login",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const user = await new AuthController().login(body);
            res.cookie("jwt", user.token, { httpOnly: true }).status(200).json({
                message: "user logged in",
                status: "success",
                data: user.data,
            });
            next();
        } catch (err) {
            console.log("this hit");
            next(err);
        }
    }
);

authRouter.get(
    "/me",
    ProtectedRoute,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await new AuthController().getme(req.userId);
            res.status(200).json({
                message: "getting user data",
                status: "success",
                data: user.data,
            });
            next();
        } catch (err) {
            next(err);
        }
    }
);

authRouter.post(
    "/logout",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie("jwt").status(200).json({
                message: "user logged out",
                status: "success",
            });
            next();
        } catch (err) {
            next(err);
        }
    }
);

export default authRouter;
