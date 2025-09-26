import {
    Router,
    type NextFunction,
    type Request,
    type Response,
} from "express";
import { TaskController } from "../controller/taskController.js";
import { ErrorMessage } from "../lib/error.js";
import { ProtectedRoute } from "../middleware/protectedRoute.js";

const taskRouter = Router();

taskRouter.post(
    "/create",
    ProtectedRoute,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            body.user = req.userId;
            const data = await new TaskController().createTask(body);
            res.status(201).json({
                message: "task created",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    }
);

taskRouter.get(
    "/",
    ProtectedRoute,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await new TaskController().get(req.userId);
            res.status(200).json({
                message: "task fetching",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    }
);

taskRouter.delete(
    "/:id",
    ProtectedRoute,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (!id)
                throw new ErrorMessage(
                    "id not provided",
                    "task-route-get",
                    404
                );
            const data = await new TaskController().delete(id, req.userId);
            res.status(200).json({
                message: "task delete",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    }
);

taskRouter.put(
    "/:id",
    ProtectedRoute,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const body = req.body;
            if (!id)
                throw new ErrorMessage(
                    "id not provided",
                    "task-route-get",
                    404
                );
            const data = await new TaskController().update(id, body);
            res.status(200).json({
                message: "task updated",
                status: "success",
                data,
            });
            next();
        } catch (error) {
            next(error);
        }
    }
);

export default taskRouter;
