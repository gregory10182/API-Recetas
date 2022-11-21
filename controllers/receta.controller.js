import receta from "../models/receta.model.js";


export const getRecetas = async (req, res) => {
    try {
        const recetas = await receta.find();
        res.status(200).json(recetas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReceta = async (req, res) => {
    console.log(req.body);
    return res.status(201).send(req.body);
}