/*
  Warnings:

  - You are about to drop the `grades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "grades";

-- CreateTable
CREATE TABLE "Grades" (
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "term" INTEGER NOT NULL,

    CONSTRAINT "Grades_pkey" PRIMARY KEY ("name")
);
