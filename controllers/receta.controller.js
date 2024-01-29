import receta from "../models/receta.model.js";
import { uploadImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

export const getRecetas = async (req, res) => {
  try {
    const recetas = await receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getReceta = async (req, res) => {
  const { id } = req.params;
  try {
    const receta_byid = await receta.findById(id);
    res.status(200).json(receta_byid);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReceta = async (req, res) => {
  try {
    console.log("hola");
    const { Nombre_receta, CantidadTotal, ingredientes, pasos } = req.body;
    console.log(req.body);
    const recetaToPost = new receta({
      Nombre_receta,
      CantidadTotal,
      ingredientes,
      pasos,
    });
    if (req.files?.img) {
      const result = await uploadImage(req.files.img.tempFilePath);
      recetaToPost.img = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };

      await fs.unlink(req.files.img.tempFilePath);
    }

    console.log(recetaToPost);

    await recetaToPost.save();

    res.status(201).json(recetaToPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReceta = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  try {
    if (req.files?.img) {
      const result = await uploadImage(req.files.img.tempFilePath);

      req.body.img = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };

      await fs.unlink(req.files.img.tempFilePath);
    } else {
      req.body.img = JSON.parse(req.body.img);
    }

    const receta_updated = await receta.findByIdAndUpdate(id, req.body);
    res.status(200).json(receta_updated);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteReceta = async (req, res) => {
  const { id } = req.params;
  try {
    const receta_deleted = await receta.findByIdAndDelete(id);
    res.status(200).json(receta_deleted);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
