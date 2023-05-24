import mongoose from "mongoose";

const recetaSchema = mongoose.Schema({
    Nombre_receta: { type: String, required: true },
    CantidadTotal: { type: Object, required: true },
    ingredientes: { type: Object, required: true },
    pasos: { type: Object, required: true },
    img: {public_id : {type: String, required: true}, secure_url: {type: String, required: true}},
})


export default mongoose.model('Receta', recetaSchema);