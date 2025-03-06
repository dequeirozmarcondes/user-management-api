import { Router } from "express";
import { CreateUserController } from "../controllers/UserController";

const router = Router();

router.get("/users", async (req, res) => {
    const controller = new CreateUserController();
    await controller.handle(req, res);
});

export { router };