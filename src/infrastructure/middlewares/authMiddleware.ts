import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return; // Aqui usamos return para garantir que a execução pare se não houver token
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as {
            id: string;
        };
        req.user = { id: decoded.id }; // Adiciona o ID do usuário no objeto da requisição
        next(); // Passa para o próximo middleware ou rota
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: "Token expired." });
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(400).json({ message: "Invalid token." });
        } else {
            res.status(500).json({ message: "Internal server error." });
        }
    }
};
