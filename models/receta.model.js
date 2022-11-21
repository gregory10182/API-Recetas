import mongoose from "mongoose";

const recetaSchema = mongoose.Schema({
    Nombre_receta: { type: String, required: true },
    ingredientes: { type: Object, required: true },
    cantidades: { type: Object, required: true },
    pasos: { type: Object, required: true },
    img: {data: Buffer, contentType: String}
})


export default mongoose.model('Receta', recetaSchema);