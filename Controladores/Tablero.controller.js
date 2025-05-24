import * as tableroModel from "../Modelos/Tablero.modelo.js";

export const obtenerTableros = async (req, res) => {
    const tableros = await tableroModel.obtenerTableros();
    res.json(tableros);
};

export const crearTablero = async (req, res) => {
    const nuevoTablero = await tableroModel.crearTablero(req.body);
    res.json(nuevoTablero);
};

export const obtenerTableroId = async (req, res) => {
  try {
    const tablero = await tableroModel.obtenerTableroId(req.params.id);
    res.json(tablero);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tablero" });
  }
};

export const actualizarTablero = async (req, res) => {
  try {
    const tableroActualizado = await tableroModel.actualizarTablero(req.params.id, req.body);
    res.json(tableroActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar tablero" });
  }
};

export const eliminarTablero = async (req, res) => {
  try {
    await tableroModel.eliminarTablero(req.params.id);
    res.json({ mensaje: "Tablero eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar tablero" });
  }
};
