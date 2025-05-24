import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearCategoria = async (datos) => {
    return await prisma.categoria.create({
        data: datos,
    });
};

export const obtenerCategorias = async () => {
    return await prisma.categoria.findMany();
};

export const obtenerCategoriaId = async (id) => {
    return await prisma.categoria.findUnique({
        where: { id: parseInt(id) },
    });
};

export const actualizarCategoria = async (id, datos) => {
    return await prisma.categoria.update({
        where: { id: parseInt(id) },
        data: datos,
    });
};

export const eliminarCategoria = async (id) => {
    return await prisma.categoria.delete({
        where: { id: parseInt(id) },
    });
};
