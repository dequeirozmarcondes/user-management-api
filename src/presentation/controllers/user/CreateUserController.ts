import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/use-cases/users/CreateUserUseCase";
import { IUserRepository } from "../../../application/interfaces/IUserRepository";

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase;

    constructor(userRepository: IUserRepository) {
        this.createUserUseCase = new CreateUserUseCase(userRepository);
    }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.createUserUseCase.execute(req.body);
            return res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
