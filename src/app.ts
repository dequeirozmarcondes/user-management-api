//app.ts
import express from "express";
import { router } from "./presentation/routes/userRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json"; // Adjust the path as necessary



const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(router);


export default app;
