import express from "express";
import * as tableroController from "../Controladores/Tablero.controller.js";

const router = express.Router();

router.post("/crear", tableroController.crearTablero);
router.get("/todos", tableroController.obtenerTableros);
router.get("/obtener/:id", tableroController.obtenerTableroId);
router.put("/actualizar/:id", tableroController.actualizarTablero);
router.delete("/eliminar/:id", tableroController.eliminarTablero);

export default router;
