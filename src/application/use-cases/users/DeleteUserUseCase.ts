// DeleteUserUseCase.ts

import { IUserRepository } from "../../interfaces/IUserRepository";

export class DeleteUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId: string) {
        // Exclui o usuário utilizando o repositório
        await this.userRepository.delete(userId);
        return { message: "User deleted successfully" };
    }
}
