// DeleteUserController.ts

import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../../application/use-cases/users/DeleteUserUseCase";
import { UserRepository } from "../../../infrastructure/database/UserRepository";

const userRepository = new UserRepository();

export class DeleteUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
            const deleteUserUseCase = new DeleteUserUseCase(userRepository);
            await deleteUserUseCase.execute(userId); // Exclui o usuário
            return res.status(204).send(); // Retorna 204 No Content (sucesso)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
