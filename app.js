// configuración de express
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import UsuarioRoutes from "./Rutas/usuario.rutas.js";
import RecetaRouters from "./Rutas/receta.rutas.js";
import PasoRouter from "./Rutas/paso.rutas.js";
import CategoriasRouter from "./Rutas/categoria.rutas.js";
import ComentarioRouter from "./Rutas/comentario.rutas.js";
import TableroRouter from "./Rutas/tablero.rutas.js";
import FavoritosRouter from "./Rutas/favoritos.rutas.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


// API routes
app.use("/usuarios", UsuarioRoutes);
app.use("/recetas", RecetaRouters);
app.use("/pasos", PasoRouter);
app.use("/categorias", CategoriasRouter);
app.use("/comentarios", ComentarioRouter);
app.use("/tableros", TableroRouter);
app.use("/favoritos", FavoritosRouter);

// Servir el frontend
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});


export default app;
