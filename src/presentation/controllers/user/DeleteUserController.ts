import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../../application/use-cases/users/DeleteUserUseCase";
import { IUserRepository } from "../../../application/interfaces/IUserRepository";

export class DeleteUserController {
    private deleteUserUseCase: DeleteUserUseCase;

    constructor(userRepository: IUserRepository) {
        this.deleteUserUseCase = new DeleteUserUseCase(userRepository);
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
            await this.deleteUserUseCase.execute(userId); // Exclui o usuário
            return res.status(204).send(); // Retorna 204 No Content (sucesso)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
