import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearReceta = async(datos) => {

    return await prisma.receta.create({
        data:{
      Titulo: datos.Titulo,
      Descripcion: datos.Descripcion,
      Ingredientes: datos.Ingredientes,
      NumeroDePasos: datos.NumeroDePasos,
      Imagen: datos.Imagen,
      FechaDeCreacion: new Date(datos.FechaDeCreacion),
      Usuarioid: datos.Usuarioid,
      categorias: {
        connect: datos.categorias.map((categoria) => ({ id: categoria.id }))
      },
        }
    });
};

export const obtenerRecetas = async(datos) =>{
    return await prisma.receta.findMany();
};

export const obtenerRecetaId = async(id) =>{
    return await prisma.receta.findUnique({
        where: {id: parseInt(id)},
    });
};

export const actualizarReceta = async(id) =>{
    return await prisma.receta.update({
where: {id: parent(id)},
data:datos,
    });
};

export const eliminarReceta = async(id) =>{
    return await prisma.receta.delete({
        where: {id: parseInt(id)},
    });
};