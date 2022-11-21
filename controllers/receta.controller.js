import receta from "../models/receta.model.js";


export const getRecetas = async (req, res) => {
    try {
        const recetas = await receta.find();
        res.status(200).json(recetas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getReceta = async (req, res) => {
    const { id } = req.params;
    try {
        const receta_byid = await receta.findById(id)
        res.status(200).json(receta_byid);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReceta = async (req, res) => {
    console.log(req.body);
    return res.status(201).json(req.body);
}

export const updateReceta = async (req, res) => {
    const { id } = req.params;
    try {
        const receta_updated = await receta.findByIdAndUpdate(id, req.body)
        res.status(200).json(receta_updated);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteReceta = async (req, res) => {
    const { id } = req.params;
    try {
        const receta_deleted = await receta.findByIdAndDelete(id)
        res.status(200).json(receta_deleted);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
    