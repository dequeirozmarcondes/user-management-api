import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { IUserRepository } from "../../application/interfaces/IUserRepository.js";
import { authConfig } from "../config/authConfig.js";

interface JwtPayload {
    id: string;
}

export class AuthService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async login(
        email: string,
        password: string,
    ): Promise<{ accessToken: string; refreshToken: string } | null> {
        const user = await this.userRepository.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return null;
        }

        // Gera o access token (válido por 15 minutos)
        const accessToken = jwt.sign({ id: user._id }, authConfig.jwtSecret, {
            expiresIn: "15m",
        });

        // Gera o refresh token (válido por 7 dias)
        const refreshToken = jwt.sign({ id: user._id }, authConfig.jwtRefreshSecret, {
            expiresIn: "7d",
        });

        return { accessToken, refreshToken };
    }

    async refreshToken(
        refreshToken: string,
    ): Promise<{ accessToken: string } | null> {
        try {
            // Verifica se o refresh token é válido
            const decoded = jwt.verify(
                refreshToken,
                authConfig.jwtRefreshSecret,
            ) as JwtPayload;

            // Gera um novo access token
            const accessToken = jwt.sign({ id: decoded.id }, authConfig.jwtSecret, {
                expiresIn: "15m",
            });

            return { accessToken };
        } catch (error) {
            return null;
        }
    }

    async validateToken(token: string): Promise<JwtPayload | null> {
        try {
            const decoded = jwt.verify(token, authConfig.jwtSecret) as JwtPayload;
            return decoded;
        } catch (error) {
            return null;
        }
    }
}
