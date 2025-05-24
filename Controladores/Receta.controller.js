import * as recetaModel from "../Modelos/Receta.modelo.js"

export const obtenerRecetas = async(req,res) =>{
    try{
        const receta = await recetaModel.obtenerRecetas();
        res.json(receta);
    }catch (error) {
        res.status(500).json({ error: "Error al obtener Recetas" });
      };
};

export const crearReceta = async (req,res) =>{
    const nuevoReceta = await recetaModel.crearReceta(req.body);
    res.json(nuevoReceta);
};

export const obtenerRecetaId = async(req,res) => {
    const recetas = recetaModel.obtenerRecetaId(req.params.id);
    res.json(recetas);
};

export const actualizarReceta = async(req,res) => {

    const recetaActualizada = await recetaModel.actualizarReceta(req.params.id,req.body);
    res.json(recetaActualizada);
}

export const eliminarReceta = async(req,res) => {
    await recetaModel.eliminarReceta(req.params.id);
    res.json({mensaje: "Receta eliminada correctamente"});

}



