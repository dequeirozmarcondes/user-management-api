import { CreateUserDTO } from "../../dto/UserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";
import bcrypt from "bcryptjs"; // Certifique-se de instalar o bcryptjs no seu projeto

export class CreateUserUseCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(data: CreateUserDTO) {
        // Validação da senha (pelo menos 8 caracteres e uma letra e um número)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(data.password)) {
            throw new Error(
                "Password must be at least 8 characters long and contain at least one letter and one number",
            );
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Criar o usuário com a senha criptografada
        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword,
        });

        return user;
    }
}
