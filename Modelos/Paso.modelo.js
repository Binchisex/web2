import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const crearPaso = async (datos) => {
    return await prisma.paso.create({
        data: datos,
    });
};

export const obtenerPasos = async () => {
    return await prisma.paso.findMany();
};

export const obtenerPasoId = async (id) => {
    return await prisma.paso.findUnique({
        where: { id: parseInt(id) },
    });
};

export const actualizarPaso = async (id, datos) => {
    return await prisma.paso.update({
        where: { id: parseInt(id) },
        data: datos,
    });
};

export const eliminarPaso = async (id) => {
    return await prisma.paso.delete({
        where: { id: parseInt(id) },
    });
};
