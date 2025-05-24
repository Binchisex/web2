-- CreateTable
CREATE TABLE "User" (
    "Id_Usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "fechaDeNacimiento" DATETIME NOT NULL,
    "fechaDeRegistro" DATETIME NOT NULL,
    "password" TEXT NOT NULL
);
