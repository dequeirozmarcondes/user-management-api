import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const createUserUseCase = new CreateUserUseCase();
        const response = await createUserUseCase.execute();
        return res.status(201).json(response);
    }
}

export { CreateUserController };