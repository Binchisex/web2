import * as pasoModel from "../Modelos/Paso.modelo.js";

export const obtenerPasos = async (req, res) => {
    try {
        const pasos = await pasoModel.obtenerPasos();
        res.json(pasos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener Pasos" });
    }
};

export const crearPaso = async (req, res) => {
    try {
        const nuevoPaso = await pasoModel.crearPaso(req.body);
        res.json(nuevoPaso);
    } catch (error) {
        res.status(500).json({ error: "Error al crear Paso" });
    }
};

export const obtenerPasoId = async (req, res) => {
    try {
        const paso = await pasoModel.obtenerPasoId(req.params.id);
        res.json(paso);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener Paso por ID" });
    }
};

export const actualizarPaso = async (req, res) => {
    try {
        const pasoActualizado = await pasoModel.actualizarPaso(req.params.id, req.body);
        res.json(pasoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar Paso" });
    }
};

export const eliminarPaso = async (req, res) => {
    try {
        await pasoModel.eliminarPaso(req.params.id);
        res.json({ mensaje: "Paso eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar Paso" });
    }
};
