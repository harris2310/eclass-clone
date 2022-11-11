
-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Courses" RENAME TO "Course";
ALTER TABLE "Grades" RENAME TO "Grade";

-- AddForeignKey
