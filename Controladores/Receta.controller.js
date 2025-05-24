import * as recetaModel from "../Modelos/Receta.modelo.js";

// Obtener todas las recetas
export const obtenerRecetas = async (req, res) => {
  try {
    const recetas = await recetaModel.obtenerRecetas();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener Recetas" });
  }
};

// Crear receta
export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = await recetaModel.crearReceta(req.body);
    res.json(nuevaReceta);
  } catch (error) {
    res.status(500).json({ error: "Error al crear receta" });
  }
};

// Obtener receta por ID
export const obtenerRecetaId = async (req, res) => {
  try {
    const receta = await recetaModel.obtenerRecetaId(req.params.id);
    res.json(receta);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener receta por ID" });
  }
};

// Actualizar receta
export const actualizarReceta = async (req, res) => {
  try {
    const recetaActualizada = await recetaModel.actualizarReceta(req.params.id, req.body);
    res.json(recetaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar receta" });
  }
};

// Eliminar receta
export const eliminarReceta = async (req, res) => {
  try {
    await recetaModel.eliminarReceta(req.params.id);
    res.json({ mensaje: "Receta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar receta" });
  }
};
