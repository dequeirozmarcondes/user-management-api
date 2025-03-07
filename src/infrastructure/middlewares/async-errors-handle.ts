import { Request, Response, NextFunction } from "express";
import "express-async-errors";

export const asyncErrorsHandle = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction // ⬅️ Next function deve estar presente
) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ status: "error", message: "Internal Server Error" });
};
