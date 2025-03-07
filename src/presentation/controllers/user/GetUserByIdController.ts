// GetUserController.ts

import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../../application/use-cases/users/GetUserByIdUseCase";
import { UserRepository } from "../../../infrastructure/database/UserRepository";

const userRepository = new UserRepository();

export class GetUserByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
            const getUserUseCase = new GetUserByIdUseCase(userRepository);
            const user = await getUserUseCase.execute(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
