import { Router } from "express";
import { multerConfig } from "../utils/multer.js";

// controllers
import { getRecetas,
         getReceta, 
         createReceta,
         updateReceta, 
         deleteReceta } from "../controllers/receta.controller.js";

const router = Router();
const upload = multerConfig();

router.get("/recetas/", getRecetas);

router.get("/recetas/:id", getReceta);

router.post("/recetas/", upload.single('img'), createReceta);

router.put("/recetas/:id", upload.single('img'), updateReceta);

router.delete("/recetas/:id", deleteReceta);



export default router;