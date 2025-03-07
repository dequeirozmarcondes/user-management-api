// app.ts
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import connectDB from "./infrastructure/database/configMongoose";
import { userRoutes } from "./presentation/routes/userRoutes";
import { authUserRoutes } from "./presentation/routes/authUserRoutes";


const app = express();

app.use(cors());
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use(userRoutes, authUserRoutes);

// Conecta ao MongoDB
connectDB();


export default app;
