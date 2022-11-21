import { Router } from "express";

// controllers
import { getRecetas,
         getReceta, 
         createReceta,
         updateReceta, 
         deleteReceta } from "../controllers/receta.controller.js";

const router = Router();

router.get("/recetas/", getRecetas);

router.get("/recetas/:id", getReceta);

router.post("/recetas/", createReceta);

router.put("/recetas/:id", updateReceta);

router.delete("/recetas/:id", deleteReceta);



export default router;