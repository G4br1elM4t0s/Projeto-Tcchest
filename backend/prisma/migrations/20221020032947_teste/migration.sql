/*
  Warnings:

  - Added the required column `emailStudent` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailStudent" TEXT NOT NULL
);
INSERT INTO "new_Group" ("id") SELECT "id" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
CREATE UNIQUE INDEX "Group_emailStudent_key" ON "Group"("emailStudent");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
