import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../application/use-cases/users/UpdateUserUseCase";
import { IUserRepository } from "../../../application/interfaces/IUserRepository";

export class UpdateUserController {
    private updateUserUseCase: UpdateUserUseCase;

    constructor(userRepository: IUserRepository) {
        this.updateUserUseCase = new UpdateUserUseCase(userRepository);
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
            const updateData = req.body; // Obtém os dados de atualização do corpo da requisição
            const updatedUser = await this.updateUserUseCase.execute(userId, updateData);
            return res.status(200).json(updatedUser);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
