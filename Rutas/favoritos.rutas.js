import express from "express";
import * as favoritoController from "../Controladores/Favoritos.controller.js";

const router = express.Router();


router.post("/crear", favoritoController.crearFavorito);
router.get("/usuario/:id", favoritoController.obtenerFavoritosDeUsuario);
router.delete("/eliminar/:Recetaid/:Usuarioid", favoritoController.eliminarFavorito);

export default router;
