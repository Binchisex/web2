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
    "FechaDeCreacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Usuarioid" INTEGER NOT NULL,
    CONSTRAINT "Receta_Usuarioid_fkey" FOREIGN KEY ("Usuarioid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Receta" ("Descripcion", "FechaDeCreacion", "Imagen", "Ingredientes", "NumeroDePasos", "Titulo", "Usuarioid", "id") SELECT "Descripcion", "FechaDeCreacion", "Imagen", "Ingredientes", "NumeroDePasos", "Titulo", "Usuarioid", "id" FROM "Receta";
DROP TABLE "Receta";
ALTER TABLE "new_Receta" RENAME TO "Receta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
