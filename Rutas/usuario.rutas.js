import express from "express";
import * as usuarioController from "../Controladores/Usuario.controller.js";

const router = express.Router();

router.post("/crear", usuarioController.crearUsuario);
router.get("/todos", usuarioController.obtenerUsuarios);
router.get("/obtener/:id",usuarioController.obtenerUsuariosID);
router.put("/actualizar/:id",usuarioController.actualizarUsuario);
router.delete("/eliminar/:id",usuarioController.eliminarUsuario);
router.post("/login", usuarioController.loginUsuario);


export default router;

