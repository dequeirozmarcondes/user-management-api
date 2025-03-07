// userRoutes.ts

import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { GetUserByIdController } from "../controllers/user/GetUserByIdController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";

export const router = Router();

// Rota para criação de usuário - Usando POST
router.post("/users", async (req, res) => {
    const controller = new CreateUserController();
    await controller.handle(req, res);
});

// Rota para obter um usuário específico por ID - Usando GET
router.get("/users/:id", async (req, res) => {
    const controller = new GetUserByIdController();
    await controller.handle(req, res);
});

// Rota para atualizar um usuário - Usando PUT
router.put("/users/:id", async (req, res) => {
    const controller = new UpdateUserController();
    await controller.handle(req, res);
});

// Rota para deletar um usuário - Usando DELETE
router.delete("/users/:id", async (req, res) => {
    const controller = new DeleteUserController();
    await controller.handle(req, res);
});
