// app.ts
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { router } from "./presentation/routes/userRoutes";
import connectDB from "./infrastructure/database/configMongoose";
// import asyncErrorsHandle from "./infrastructure/middlewares/async-errors-handle";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use(router);

// Middleware de tratamento de erros **DEVE SER O ÚLTIMO**
// app.use(asyncErrorsHandle);

// Conecta ao MongoDB
connectDB();


export default app;
