import express from "express";
import * as pasoController from "../Controladores/Paso.controller.js";

const router = express.Router();

router.post("/crear", pasoController.crearPaso);
router.get("/todos", pasoController.obtenerPasos);
router.get("/obtener/:id", pasoController.obtenerPasoId);
router.put("/actualizar/:id", pasoController.actualizarPaso);
router.delete("/eliminar/:id", pasoController.eliminarPaso);

export default router;