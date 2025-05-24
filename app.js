//configuracion de express

import express from "express";
import cors from "cors";

import UsuarioRoutes from "./Rutas/usuario.rutas.js"
import RecetaRouters from "./Rutas/receta.rutas.js"
import PasoRouter from "./Rutas/paso.rutas.js"
import CategoriasRouter from "./Rutas/categoria.rutas.js"
import ComentarioRouter from "./Rutas/comentario.rutas.js"
import TableroRouter from "./Rutas/tablero.rutas.js"
import FavoritosRouter from "./Rutas/favoritos.rutas.js"


const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios",UsuarioRoutes);
app.use("/recetas",RecetaRouters);
app.use("/pasos",PasoRouter);
app.use("/categorias",CategoriasRouter);
app.use("/comentarios",ComentarioRouter);
app.use("/tableros",TableroRouter);
app.use("/favoritos",FavoritosRouter);




export default app;