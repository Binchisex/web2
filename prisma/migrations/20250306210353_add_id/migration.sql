/*
  Warnings:

  - You are about to drop the `Paso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Receta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Paso";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Receta";
PRAGMA foreign_keys=on;
