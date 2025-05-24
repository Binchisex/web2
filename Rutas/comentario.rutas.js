import express from "express";
import * as comentarioController from "../Controladores/Comentario.controller.js";

const router = express.Router();

router.post("/crear", comentarioController.crearComentario);
router.get("/todos", comentarioController.obtenerComentarios);
router.get("/obtener/:id", comentarioController.obtenerComentarioId);
router.put("/actualizar/:id", comentarioController.actualizarComentario);
router.delete("/eliminar/:id", comentarioController.eliminarComentario);

export default router;