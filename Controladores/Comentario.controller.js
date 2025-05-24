import * as comentarioModel from "../Modelos/Comentario.modelo.js";

export const obtenerComentarios = async (req, res) => {
  try {
    const comentarios = await comentarioModel.obtenerComentarios();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
};

export const crearComentario = async (req, res) => {
  try {
    const nuevoComentario = await comentarioModel.crearComentario(req.body);
    res.json(nuevoComentario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear comentario" });
  }
};

export const obtenerComentarioId = async (req, res) => {
  try {
    const comentario = await comentarioModel.obtenerComentarioId(req.params.id);
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comentario" });
  }
};

export const actualizarComentario = async (req, res) => {
  try {
    const comentarioActualizado = await comentarioModel.actualizarComentario(req.params.id, req.body);
    res.json(comentarioActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar comentario" });
  }
};

export const eliminarComentario = async (req, res) => {
  try {
    await comentarioModel.eliminarComentario(req.params.id);
    res.json({ mensaje: "Comentario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar comentario" });
  }
};
