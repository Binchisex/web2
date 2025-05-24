import * as categoriaModel from "../Modelos/Categoria.modelo.js";

export const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await categoriaModel.obtenerCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener Categorías" });
    }
};

export const crearCategoria = async (req, res) => {
    const nuevaCategoria = await categoriaModel.crearCategoria(req.body);
    res.json(nuevaCategoria);
};

export const obtenerCategoriaId = async (req, res) => {
    const categoria = await categoriaModel.obtenerCategoriaId(req.params.id);
    res.json(categoria);
};

export const actualizarCategoria = async (req, res) => {
    const categoriaActualizada = await categoriaModel.actualizarCategoria(req.params.id, req.body);
    res.json(categoriaActualizada);
};

export const eliminarCategoria = async (req, res) => {
    await categoriaModel.eliminarCategoria(req.params.id);
    res.json({ mensaje: "Categoría eliminada correctamente" });
};
