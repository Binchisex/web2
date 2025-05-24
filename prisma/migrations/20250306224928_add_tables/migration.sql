/*
  Warnings:

  - Added the required column `FechaDeCreacion` to the `Receta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Paso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Numero" INTEGER NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Recetaid" INTEGER NOT NULL,
    CONSTRAINT "Paso_Recetaid_fkey" FOREIGN KEY ("Recetaid") REFERENCES "Receta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Texto" TEXT NOT NULL,
    "Calificacion" INTEGER,
    "Usuarioid" INTEGER NOT NULL,
    "Recetaid" INTEGER NOT NULL,
    CONSTRAINT "Comentario_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentario_Recetaid_fkey" FOREIGN KEY ("Recetaid") REFERENCES "Receta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tablero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Usuarioid" INTEGER NOT NULL,
    CONSTRAINT "Tablero_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorito" (
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Recetaid" INTEGER NOT NULL,
    "Usuarioid" INTEGER NOT NULL,

    PRIMARY KEY ("Recetaid", "Usuarioid"),
    CONSTRAINT "Favorito_Recetaid_fkey" FOREIGN KEY ("Recetaid") REFERENCES "Receta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorito_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RecetaToTablero" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RecetaToTablero_A_fkey" FOREIGN KEY ("A") REFERENCES "Receta" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RecetaToTablero_B_fkey" FOREIGN KEY ("B") REFERENCES "Tablero" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoriaToReceta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CategoriaToReceta_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoriaToReceta_B_fkey" FOREIGN KEY ("B") REFERENCES "Receta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Receta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Ingredientes" TEXT NOT NULL,
    "NumeroDePasos" INTEGER NOT NULL,
    "Imagen" TEXT NOT NULL,
    "FechaDeCreacion" DATETIME NOT NULL,
    "Usuarioid" INTEGER NOT NULL,
    CONSTRAINT "Receta_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Receta" ("Descripcion", "Imagen", "Ingredientes", "NumeroDePasos", "Titulo", "Usuarioid", "id") SELECT "Descripcion", "Imagen", "Ingredientes", "NumeroDePasos", "Titulo", "Usuarioid", "id" FROM "Receta";
DROP TABLE "Receta";
ALTER TABLE "new_Receta" RENAME TO "Receta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_RecetaToTablero_AB_unique" ON "_RecetaToTablero"("A", "B");

-- CreateIndex
CREATE INDEX "_RecetaToTablero_B_index" ON "_RecetaToTablero"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriaToReceta_AB_unique" ON "_CategoriaToReceta"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriaToReceta_B_index" ON "_CategoriaToReceta"("B");
