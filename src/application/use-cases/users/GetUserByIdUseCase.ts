// GetUserUseCase.ts

import { IUserRepository } from "../../interfaces/IUserRepository";

export class GetUserByIdUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId: string) {
        const user = await this.userRepository.findById(userId); // Recupera o usuário pelo ID
        return user;
    }
}
