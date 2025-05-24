import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const crearFavorito = async (Recetaid, Usuarioid) => {
  return await prisma.favorito.create({
    data: {
      Recetaid,
      Usuarioid,
    },
  });
};

// Obtener todos los favoritos de un usuario
export const obtenerFavoritosDeUsuario = async (Usuarioid) => {
  return await prisma.favorito.findMany({
    where: {
      Usuarioid,
    },
    include: {
      receta: true,  // Si quieres incluir los detalles de la receta también
    },
  });
};


export const eliminarFavorito = async (Recetaid, Usuarioid) => {
  return await prisma.favorito.delete({
    where: {
      Recetaid_Usuarioid: {
        Recetaid,
        Usuarioid,
      },
    },
  });
};
