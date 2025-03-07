import { Router } from "express";
import { AuthController } from "../controllers/auth/AuthController";
import { AuthService } from "../../infrastructure/auth/JWTAuthService";
import { authenticate } from "../../infrastructure/middlewares/authMiddleware";
import { UserRepository } from "../../infrastructure/database/UserRepository";

// Instanciando uma vez o UserRepository e o AuthService
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

// Instanciando o AuthController uma vez
const authController = new AuthController(authService);

export const router = Router();

// Rota para login de usuário - Usando POST
router.post("/users/login", async (req, res) => {
    await authController.login(req, res);
});

// Rota para logout de usuário - Usando POST
router.post("/users/logout", authenticate, async (req, res) => {
    await authController.logout(req, res);
});

// Rota para refresh de token de usuário - Usando POST
router.post("/users/refresh-token", async (req, res) => {
    await authController.refreshToken(req, res);
});


const authUserRoutes = router;

export { authUserRoutes } 
