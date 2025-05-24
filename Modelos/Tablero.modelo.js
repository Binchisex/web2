import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearTablero = async (data) => {
  return await prisma.tablero.create({
    data: {
        Titulo: data.Titulo,
        Descripcion: data.Descripcion,
        Usuarioid:data.Usuarioid,
        recetas: {
            connect:data.recetas.map((recetas) => ({id:recetas.id}))
        },
    }
  });
};

export const obtenerTableros = async () => {
  return await prisma.tablero.findMany();
};

export const obtenerTableroId = async (id) => {
  return await prisma.tablero.findUnique({
    where: { id: parseInt(id) },
  });
};

export const actualizarTablero = async (id, datos) => {
  return await prisma.tablero.update({
    where: { id: parseInt(id) },
    data: datos,
  });
};

export const eliminarTablero = async (id) => {
  return await prisma.tablero.delete({
    where: { id: parseInt(id) },
  });
};
