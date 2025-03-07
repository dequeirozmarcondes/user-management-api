//UserController.ts

import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/use-cases/users/CreateUserUseCase";
import { UserRepository } from "../../../infrastructure/database/UserRepository";


const userRepository = new UserRepository();

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const createUserUseCase = new CreateUserUseCase(userRepository);
            const user = await createUserUseCase.execute(req.body);
            return res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

