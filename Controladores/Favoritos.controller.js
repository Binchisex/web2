import * as favoritoModel from "../Modelos/Favorito.model.js";


// Crear un favorito
export const crearFavorito = async (req, res) => {
  const { Recetaid, Usuarioid } = req.body;

    const nuevoFavorito = await favoritoModel.crearFavorito(Recetaid, Usuarioid);
    res.json(nuevoFavorito);

};

// Obtener los favoritos de un usuario
export const obtenerFavoritosDeUsuario = async (req, res) => {
  const { Usuarioid } = req.params;

  try {
    const favoritos = await favoritoModel.obtenerFavoritosDeUsuario(Usuarioid);
    res.status(200).json(favoritos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener favoritos" });
  }
};

// Eliminar un favorito
export const eliminarFavorito = async (req, res) => {
  const { Recetaid, Usuarioid } = req.params;

  try {
    const favoritoEliminado = await favoritoModel.eliminarFavorito(Recetaid, Usuarioid);
    if (favoritoEliminado) {
      res.status(200).json({ message: "Favorito eliminado correctamente" });
    } else {
      res.status(404).json({ message: "Favorito no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar favorito" });
  }
};
