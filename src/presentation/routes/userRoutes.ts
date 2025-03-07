//userRoutes.ts

import { Router } from "express";
import { CreateUserController } from "../controllers/UserController";

export const router = Router();

// Rota para criação de usuário - Usando POST
router.post("/users", async (req, res) => {
    const controller = new CreateUserController();
    await controller.handle(req, res);
});