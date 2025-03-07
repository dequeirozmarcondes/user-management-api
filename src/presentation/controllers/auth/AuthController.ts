import { Request, Response } from "express";
import { AuthService } from "../../../infrastructure/auth/JWTAuthService";
import { UserRepository } from "../../../infrastructure/database/UserRepository";
import { loginUserSchema } from "../../schemas/userValidation";

// Instância do UserRepository
const userRepository = new UserRepository();

// Instância do AuthService com UserRepository injetado
const authService = new AuthService(userRepository);

export class AuthController {
    private authService: AuthService;

    // Construtor que recebe o AuthService como dependência
    constructor(authService: AuthService) {
        this.authService = authService;
    }
    async login(req: Request, res: Response): Promise<void> {
        const { error } = loginUserSchema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.details[0].message });
            return;
        }

        const { email, password } = req.body;

        // Usa o método login do AuthService
        const tokens = await authService.login(email, password);

        if (!tokens) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        res.json(tokens); // Retorna accessToken e refreshToken
    }

    async refreshToken(req: Request, res: Response): Promise<void> {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            res.status(400).json({ message: "Refresh token is required" });
            return;
        }

        // Usa o método refreshToken do AuthService
        const newTokens = await authService.refreshToken(refreshToken);

        if (!newTokens) {
            res.status(400).json({ message: "Invalid refresh token" });
            return;
        }

        res.json(newTokens); // Retorna o novo accessToken
    }

    async logout(req: Request, res: Response): Promise<void> {
        // Como não estamos armazenando tokens no banco de dados, o logout não requer nenhuma ação específica.
        res.status(200).json({ message: "Logged out successfully" });
    }
}
