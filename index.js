import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const app = express();
app.use(express.json());


const datos = {
    email: "@admin3",
    nombre: "admin3",
    apellidos: "admin3",
    fechaDeNacimiento: new Date("2000-01-01"),
    password: "admin3"
     }

async function main(){
  const newUser = await prisma.user.create({
        data: datos,
    })

    console.log(newUser);
}

main()


/*
crear un usuario

{ 
"email": "@admin",
"nombre": "admin",
"apellidos": "admin",
"fechaDeNacimiento": "2025-03-07T00:00:00.000Z",
"password": "admin"



////////////////////crear una receta
 
"Titulo": "Receta 01",
 "Descripcion": "Descripcion 01",
 "Ingredientes": "Ingredientes 01",
 "NumeroDePasos":  2,
 "Imagen": "Ruta de imagen", 
  "Usuarioid":     5,
  "categorias": [{"id:1"}]     


////////////////////crear paso
  "Numero": 1,

  "Titulo": "Titulo 01",
  "Descripcion": "Descripcion 01",
  "Recetaid": 1

//////////////////////crear categoria

"Nombre": "Categoria1",
"Descripcion":    "Descripcion1"

//////////////////////crear comentario

"Texto": "Comentario 1",
"Calificacion": 2,
"Usuarioid": 5,
"Recetaid": 2

////////////////////////crear tablero

"Titulo": "Titulo 01",
"Descripcion": "Descripcion 01",
"Usuarioid": 5,
"recetas": [{"id:2"}] 

///////////////////////favoritos
"Recetaid": 2,
"Usuarioid": 5



}*/
