/*
  Warnings:

  - You are about to drop the column `Descripcion` on the `Favorito` table. All the data in the column will be lost.
  - You are about to drop the column `Titulo` on the `Favorito` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorito" (
    "Recetaid" INTEGER NOT NULL,
    "Usuarioid" INTEGER NOT NULL,

    PRIMARY KEY ("Recetaid", "Usuarioid"),
    CONSTRAINT "Favorito_Recetaid_fkey" FOREIGN KEY ("Recetaid") REFERENCES "Receta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorito_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favorito" ("Recetaid", "Usuarioid") SELECT "Recetaid", "Usuarioid" FROM "Favorito";
DROP TABLE "Favorito";
ALTER TABLE "new_Favorito" RENAME TO "Favorito";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
