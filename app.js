import express from "express"
import morgan from "morgan"
import cors from "cors"
import fileUpload from "express-fileupload"

// routes
import recetaRoutes from "./routes/receta.routes.js"

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads/"
}));

app.use(recetaRoutes);

export default app;

