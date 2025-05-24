import express from "express";
import * as recetaController from "../Controladores/Receta.controller.js";

const router = express.Router();

router.post("/crear", recetaController.crearReceta);
router.get("/todos", recetaController.obtenerRecetas);
router.get("/obtener/:id",recetaController.obtenerRecetaId);
router.put("/actualizar/:id",recetaController.actualizarReceta);
router.delete("/eliminar/:id",recetaController.eliminarReceta);

export default router;
