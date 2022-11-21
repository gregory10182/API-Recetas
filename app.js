import express from "express"
import morgan from "morgan"
import cors from "cors"

// routes
import recetaRoutes from "./routes/receta.routes.js"

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(recetaRoutes);

export default app;

