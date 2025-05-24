import express from "express";
import * as categoriaController from "../Controladores/Categoria.controller.js";

const router = express.Router();

router.post("/crear", categoriaController.crearCategoria);
router.get("/todos", categoriaController.obtenerCategorias);
router.get("/obtener/:id", categoriaController.obtenerCategoriaId);
router.put("/actualizar/:id", categoriaController.actualizarCategoria);
router.delete("/eliminar/:id", categoriaController.eliminarCategoria);

export default router;
