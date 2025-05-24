import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearUsuario = async(datos) => {
    return await prisma.user.create({
        data: datos,
    });
};

export const obtenerUsuarios = async () => {
    return await prisma.user.findMany();
};

export const obtenerUsuariosID = async (id) =>{
    return await prisma.user.findUnique({
        where: {id: parseInt(id)},
    });
};

export const actualizarUsuario = async (id,datos) => {
    return await prisma.user.update({
    where: {id: parseInt(id)},
    data:datos,
    });
};

export const eliminarUsuario = async (id) => {
    return await prisma.user.delete({
        where:{id: parseInt(id)},
    });
};

export const inicarsesionUsuario = async (email) => {
    return await prisma.user.findUnique({
        where: {email: email },
      });
}