import { Router } from "express";

// controllers
import { getRecetas,
         getReceta, 
         createReceta,
         updateReceta, 
         deleteReceta } from "../controllers/receta.controller.js";

const router = Router();

router.get("/receta/", getRecetas);

router.post("/receta/", createReceta);

router.get("/receta/:id", getReceta);

router.put("/receta/:id", updateReceta);

router.delete("/receta/:id", deleteReceta);



export default router;