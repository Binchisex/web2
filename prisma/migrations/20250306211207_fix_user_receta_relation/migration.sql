-- CreateTable
CREATE TABLE "Receta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Ingredientes" TEXT NOT NULL,
    "NumeroDePasos" INTEGER NOT NULL,
    "Imagen" TEXT NOT NULL,
    "Usuarioid" INTEGER NOT NULL,
    CONSTRAINT "Receta_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
