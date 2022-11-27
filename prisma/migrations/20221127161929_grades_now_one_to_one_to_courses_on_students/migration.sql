/*
  Warnings:

  - The primary key for the `Grade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[studentId,courseId]` on the table `CoursesOnStudents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId,courseId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_studentId_fkey";

-- AlterTable
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "CoursesOnStudents_studentId_courseId_key" ON "CoursesOnStudents"("studentId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_studentId_courseId_key" ON "Grade"("studentId", "courseId");

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_studentId_courseId_fkey" FOREIGN KEY ("studentId", "courseId") REFERENCES "CoursesOnStudents"("studentId", "courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
