//app.ts
import express from "express";
import { router } from "./presentation/routes/userRoutes";


const app = express();
app.use(express.json());

app.use(router);


export default app;
