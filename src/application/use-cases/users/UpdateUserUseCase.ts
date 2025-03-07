// UpdateUserUseCase.ts

import { UpdateUserDTO } from "../../dto/UserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class UpdateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId: string, data: UpdateUserDTO) {
        const updatedUser = await this.userRepository.update(userId, data); // Atualiza o usuário
        return updatedUser;
    }
}
