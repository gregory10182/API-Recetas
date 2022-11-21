import { Router } from "express";
import { multerConfig } from "../utils/multer.js";

// controllers
import { getRecetas, createReceta  } from "../controllers/receta.controller.js";

const router = Router();
const upload = multerConfig();

router.get("/", getRecetas);

router.post("/receta/", upload.single('img'), createReceta);


export default router;