import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../../application/use-cases/users/GetUserByIdUseCase";
import { IUserRepository } from "../../../application/interfaces/IUserRepository";

export class GetUserByIdController {
    private getUserByIdUseCase: GetUserByIdUseCase;

    constructor(userRepository: IUserRepository) {
        this.getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da URL
            const user = await this.getUserByIdUseCase.execute(userId);
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
