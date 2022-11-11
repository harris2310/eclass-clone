/*
  Warnings:

  - You are about to drop the column `studentId` on the `Grade` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_studentId_fkey";

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "studentId",
ALTER COLUMN "courseId" DROP DEFAULT;
DROP SEQUENCE "Grade_courseId_seq";
