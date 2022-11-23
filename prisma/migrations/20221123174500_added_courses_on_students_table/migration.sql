-- CreateTable
CREATE TABLE "CoursesOnStudents" (
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CoursesOnStudents_pkey" PRIMARY KEY ("studentId","courseId")
);

-- AddForeignKey
ALTER TABLE "CoursesOnStudents" ADD CONSTRAINT "CoursesOnStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursesOnStudents" ADD CONSTRAINT "CoursesOnStudents_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
