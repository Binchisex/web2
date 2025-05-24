import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearComentario = async (datos) => {
  return await prisma.comentario.create({
    data: datos,
  });
};

export const obtenerComentarios = async () => {
  return await prisma.comentario.findMany();
};

export const obtenerComentarioId = async (id) => {
  return await prisma.comentario.findUnique({
    where: { id: parseInt(id) },
  });
};

export const actualizarComentario = async (id, datos) => {
  return await prisma.comentario.update({
    where: { id: parseInt(id) },
    data: datos,
  });
};

export const eliminarComentario = async (id) => {
  return await prisma.comentario.delete({
    where: { id: parseInt(id) },
  });
};
