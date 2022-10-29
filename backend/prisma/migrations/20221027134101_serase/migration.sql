-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT,
    "url" TEXT NOT NULL,
    "key" TEXT,
    "size" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "group_Id" TEXT NOT NULL,
    "studentId" TEXT,
    CONSTRAINT "projects_group_Id_fkey" FOREIGN KEY ("group_Id") REFERENCES "groups" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "projects_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("created_at", "description", "group_Id", "id", "isPublic", "key", "name", "size", "studentId", "title", "updated_at", "url") SELECT "created_at", "description", "group_Id", "id", "isPublic", "key", "name", "size", "studentId", "title", "updated_at", "url" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");
CREATE UNIQUE INDEX "projects_group_Id_key" ON "projects"("group_Id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;