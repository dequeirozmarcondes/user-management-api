//CreateUserUseCase.ts

import { CreateUserDTO } from "../../dto/UserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class CreateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(data: CreateUserDTO) {
        const user = await this.userRepository.create(data); // Usando o repositório
        return user;
    }
}

